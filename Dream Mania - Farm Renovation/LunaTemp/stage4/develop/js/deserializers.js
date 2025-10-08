var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5514 = root || request.c( 'UnityEngine.JointSpring' )
  var i5515 = data
  i5514.spring = i5515[0]
  i5514.damper = i5515[1]
  i5514.targetPosition = i5515[2]
  return i5514
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5516 = root || request.c( 'UnityEngine.JointMotor' )
  var i5517 = data
  i5516.m_TargetVelocity = i5517[0]
  i5516.m_Force = i5517[1]
  i5516.m_FreeSpin = i5517[2]
  return i5516
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5518 = root || request.c( 'UnityEngine.JointLimits' )
  var i5519 = data
  i5518.m_Min = i5519[0]
  i5518.m_Max = i5519[1]
  i5518.m_Bounciness = i5519[2]
  i5518.m_BounceMinVelocity = i5519[3]
  i5518.m_ContactDistance = i5519[4]
  i5518.minBounce = i5519[5]
  i5518.maxBounce = i5519[6]
  return i5518
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5520 = root || request.c( 'UnityEngine.JointDrive' )
  var i5521 = data
  i5520.m_PositionSpring = i5521[0]
  i5520.m_PositionDamper = i5521[1]
  i5520.m_MaximumForce = i5521[2]
  i5520.m_UseAcceleration = i5521[3]
  return i5520
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5522 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5523 = data
  i5522.m_Spring = i5523[0]
  i5522.m_Damper = i5523[1]
  return i5522
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5524 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5525 = data
  i5524.m_Limit = i5525[0]
  i5524.m_Bounciness = i5525[1]
  i5524.m_ContactDistance = i5525[2]
  return i5524
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5526 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5527 = data
  i5526.m_ExtremumSlip = i5527[0]
  i5526.m_ExtremumValue = i5527[1]
  i5526.m_AsymptoteSlip = i5527[2]
  i5526.m_AsymptoteValue = i5527[3]
  i5526.m_Stiffness = i5527[4]
  return i5526
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5528 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5529 = data
  i5528.m_LowerAngle = i5529[0]
  i5528.m_UpperAngle = i5529[1]
  return i5528
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5530 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5531 = data
  i5530.m_MotorSpeed = i5531[0]
  i5530.m_MaximumMotorTorque = i5531[1]
  return i5530
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5532 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5533 = data
  i5532.m_DampingRatio = i5533[0]
  i5532.m_Frequency = i5533[1]
  i5532.m_Angle = i5533[2]
  return i5532
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5534 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5535 = data
  i5534.m_LowerTranslation = i5535[0]
  i5534.m_UpperTranslation = i5535[1]
  return i5534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5537 = data
  i5536.name = i5537[0]
  i5536.width = i5537[1]
  i5536.height = i5537[2]
  i5536.mipmapCount = i5537[3]
  i5536.anisoLevel = i5537[4]
  i5536.filterMode = i5537[5]
  i5536.hdr = !!i5537[6]
  i5536.format = i5537[7]
  i5536.wrapMode = i5537[8]
  i5536.alphaIsTransparency = !!i5537[9]
  i5536.alphaSource = i5537[10]
  i5536.graphicsFormat = i5537[11]
  i5536.sRGBTexture = !!i5537[12]
  i5536.desiredColorSpace = i5537[13]
  i5536.wrapU = i5537[14]
  i5536.wrapV = i5537[15]
  return i5536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5539 = data
  i5538.pivot = new pc.Vec2( i5539[0], i5539[1] )
  i5538.anchorMin = new pc.Vec2( i5539[2], i5539[3] )
  i5538.anchorMax = new pc.Vec2( i5539[4], i5539[5] )
  i5538.sizeDelta = new pc.Vec2( i5539[6], i5539[7] )
  i5538.anchoredPosition3D = new pc.Vec3( i5539[8], i5539[9], i5539[10] )
  i5538.rotation = new pc.Quat(i5539[11], i5539[12], i5539[13], i5539[14])
  i5538.scale = new pc.Vec3( i5539[15], i5539[16], i5539[17] )
  return i5538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5541 = data
  i5540.cullTransparentMesh = !!i5541[0]
  return i5540
}

Deserializers["Item"] = function (request, data, root) {
  var i5542 = root || request.c( 'Item' )
  var i5543 = data
  request.r(i5543[0], i5543[1], 0, i5542, 'itemImage')
  request.r(i5543[2], i5543[3], 0, i5542, 'collectItemImage')
  request.r(i5543[4], i5543[5], 0, i5542, 'itemCountText')
  i5542.ItemCount = i5543[6]
  request.r(i5543[7], i5543[8], 0, i5542, 'completeSprite')
  request.r(i5543[9], i5543[10], 0, i5542, 'data')
  request.r(i5543[11], i5543[12], 0, i5542, 'UIMovement')
  request.r(i5543[13], i5543[14], 0, i5542, 'FurnitureImage')
  i5542.portraitLocation = new pc.Vec2( i5543[15], i5543[16] )
  i5542.landscapeLocation = new pc.Vec2( i5543[17], i5543[18] )
  return i5542
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5544 = root || request.c( 'UnityEngine.UI.Image' )
  var i5545 = data
  request.r(i5545[0], i5545[1], 0, i5544, 'm_Sprite')
  i5544.m_Type = i5545[2]
  i5544.m_PreserveAspect = !!i5545[3]
  i5544.m_FillCenter = !!i5545[4]
  i5544.m_FillMethod = i5545[5]
  i5544.m_FillAmount = i5545[6]
  i5544.m_FillClockwise = !!i5545[7]
  i5544.m_FillOrigin = i5545[8]
  i5544.m_UseSpriteMesh = !!i5545[9]
  i5544.m_PixelsPerUnitMultiplier = i5545[10]
  request.r(i5545[11], i5545[12], 0, i5544, 'm_Material')
  i5544.m_Maskable = !!i5545[13]
  i5544.m_Color = new pc.Color(i5545[14], i5545[15], i5545[16], i5545[17])
  i5544.m_RaycastTarget = !!i5545[18]
  i5544.m_RaycastPadding = new pc.Vec4( i5545[19], i5545[20], i5545[21], i5545[22] )
  return i5544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5547 = data
  i5546.name = i5547[0]
  i5546.tagId = i5547[1]
  i5546.enabled = !!i5547[2]
  i5546.isStatic = !!i5547[3]
  i5546.layer = i5547[4]
  return i5546
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5548 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5549 = data
  i5548.m_hasFontAssetChanged = !!i5549[0]
  request.r(i5549[1], i5549[2], 0, i5548, 'm_baseMaterial')
  i5548.m_maskOffset = new pc.Vec4( i5549[3], i5549[4], i5549[5], i5549[6] )
  i5548.m_text = i5549[7]
  i5548.m_isRightToLeft = !!i5549[8]
  request.r(i5549[9], i5549[10], 0, i5548, 'm_fontAsset')
  request.r(i5549[11], i5549[12], 0, i5548, 'm_sharedMaterial')
  var i5551 = i5549[13]
  var i5550 = []
  for(var i = 0; i < i5551.length; i += 2) {
  request.r(i5551[i + 0], i5551[i + 1], 2, i5550, '')
  }
  i5548.m_fontSharedMaterials = i5550
  request.r(i5549[14], i5549[15], 0, i5548, 'm_fontMaterial')
  var i5553 = i5549[16]
  var i5552 = []
  for(var i = 0; i < i5553.length; i += 2) {
  request.r(i5553[i + 0], i5553[i + 1], 2, i5552, '')
  }
  i5548.m_fontMaterials = i5552
  i5548.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5549[17], i5549[18], i5549[19], i5549[20])
  i5548.m_fontColor = new pc.Color(i5549[21], i5549[22], i5549[23], i5549[24])
  i5548.m_enableVertexGradient = !!i5549[25]
  i5548.m_colorMode = i5549[26]
  i5548.m_fontColorGradient = request.d('TMPro.VertexGradient', i5549[27], i5548.m_fontColorGradient)
  request.r(i5549[28], i5549[29], 0, i5548, 'm_fontColorGradientPreset')
  request.r(i5549[30], i5549[31], 0, i5548, 'm_spriteAsset')
  i5548.m_tintAllSprites = !!i5549[32]
  request.r(i5549[33], i5549[34], 0, i5548, 'm_StyleSheet')
  i5548.m_TextStyleHashCode = i5549[35]
  i5548.m_overrideHtmlColors = !!i5549[36]
  i5548.m_faceColor = UnityEngine.Color32.ConstructColor(i5549[37], i5549[38], i5549[39], i5549[40])
  i5548.m_fontSize = i5549[41]
  i5548.m_fontSizeBase = i5549[42]
  i5548.m_fontWeight = i5549[43]
  i5548.m_enableAutoSizing = !!i5549[44]
  i5548.m_fontSizeMin = i5549[45]
  i5548.m_fontSizeMax = i5549[46]
  i5548.m_fontStyle = i5549[47]
  i5548.m_HorizontalAlignment = i5549[48]
  i5548.m_VerticalAlignment = i5549[49]
  i5548.m_textAlignment = i5549[50]
  i5548.m_characterSpacing = i5549[51]
  i5548.m_wordSpacing = i5549[52]
  i5548.m_lineSpacing = i5549[53]
  i5548.m_lineSpacingMax = i5549[54]
  i5548.m_paragraphSpacing = i5549[55]
  i5548.m_charWidthMaxAdj = i5549[56]
  i5548.m_enableWordWrapping = !!i5549[57]
  i5548.m_wordWrappingRatios = i5549[58]
  i5548.m_overflowMode = i5549[59]
  request.r(i5549[60], i5549[61], 0, i5548, 'm_linkedTextComponent')
  request.r(i5549[62], i5549[63], 0, i5548, 'parentLinkedComponent')
  i5548.m_enableKerning = !!i5549[64]
  i5548.m_enableExtraPadding = !!i5549[65]
  i5548.checkPaddingRequired = !!i5549[66]
  i5548.m_isRichText = !!i5549[67]
  i5548.m_parseCtrlCharacters = !!i5549[68]
  i5548.m_isOrthographic = !!i5549[69]
  i5548.m_isCullingEnabled = !!i5549[70]
  i5548.m_horizontalMapping = i5549[71]
  i5548.m_verticalMapping = i5549[72]
  i5548.m_uvLineOffset = i5549[73]
  i5548.m_geometrySortingOrder = i5549[74]
  i5548.m_IsTextObjectScaleStatic = !!i5549[75]
  i5548.m_VertexBufferAutoSizeReduction = !!i5549[76]
  i5548.m_useMaxVisibleDescender = !!i5549[77]
  i5548.m_pageToDisplay = i5549[78]
  i5548.m_margin = new pc.Vec4( i5549[79], i5549[80], i5549[81], i5549[82] )
  i5548.m_isUsingLegacyAnimationComponent = !!i5549[83]
  i5548.m_isVolumetricText = !!i5549[84]
  request.r(i5549[85], i5549[86], 0, i5548, 'm_Material')
  i5548.m_Maskable = !!i5549[87]
  i5548.m_Color = new pc.Color(i5549[88], i5549[89], i5549[90], i5549[91])
  i5548.m_RaycastTarget = !!i5549[92]
  i5548.m_RaycastPadding = new pc.Vec4( i5549[93], i5549[94], i5549[95], i5549[96] )
  return i5548
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5556 = root || request.c( 'TMPro.VertexGradient' )
  var i5557 = data
  i5556.topLeft = new pc.Color(i5557[0], i5557[1], i5557[2], i5557[3])
  i5556.topRight = new pc.Color(i5557[4], i5557[5], i5557[6], i5557[7])
  i5556.bottomLeft = new pc.Color(i5557[8], i5557[9], i5557[10], i5557[11])
  i5556.bottomRight = new pc.Color(i5557[12], i5557[13], i5557[14], i5557[15])
  return i5556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5558 = root || new pc.UnityMaterial()
  var i5559 = data
  i5558.name = i5559[0]
  request.r(i5559[1], i5559[2], 0, i5558, 'shader')
  i5558.renderQueue = i5559[3]
  i5558.enableInstancing = !!i5559[4]
  var i5561 = i5559[5]
  var i5560 = []
  for(var i = 0; i < i5561.length; i += 1) {
    i5560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5561[i + 0]) );
  }
  i5558.floatParameters = i5560
  var i5563 = i5559[6]
  var i5562 = []
  for(var i = 0; i < i5563.length; i += 1) {
    i5562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5563[i + 0]) );
  }
  i5558.colorParameters = i5562
  var i5565 = i5559[7]
  var i5564 = []
  for(var i = 0; i < i5565.length; i += 1) {
    i5564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5565[i + 0]) );
  }
  i5558.vectorParameters = i5564
  var i5567 = i5559[8]
  var i5566 = []
  for(var i = 0; i < i5567.length; i += 1) {
    i5566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5567[i + 0]) );
  }
  i5558.textureParameters = i5566
  var i5569 = i5559[9]
  var i5568 = []
  for(var i = 0; i < i5569.length; i += 1) {
    i5568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5569[i + 0]) );
  }
  i5558.materialFlags = i5568
  return i5558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5573 = data
  i5572.name = i5573[0]
  i5572.value = i5573[1]
  return i5572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5577 = data
  i5576.name = i5577[0]
  i5576.value = new pc.Color(i5577[1], i5577[2], i5577[3], i5577[4])
  return i5576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5581 = data
  i5580.name = i5581[0]
  i5580.value = new pc.Vec4( i5581[1], i5581[2], i5581[3], i5581[4] )
  return i5580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5585 = data
  i5584.name = i5585[0]
  request.r(i5585[1], i5585[2], 0, i5584, 'value')
  return i5584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5589 = data
  i5588.name = i5589[0]
  i5588.enabled = !!i5589[1]
  return i5588
}

Deserializers["TileCell"] = function (request, data, root) {
  var i5590 = root || request.c( 'TileCell' )
  var i5591 = data
  i5590.coordinate = new pc.Vec2( i5591[0], i5591[1] )
  i5590.TileBreakEvent = request.d('UnityEngine.Events.UnityEvent', i5591[2], i5590.TileBreakEvent)
  request.r(i5591[3], i5591[4], 0, i5590, 'tileData')
  request.r(i5591[5], i5591[6], 0, i5590, 'tile')
  return i5590
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i5592 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i5593 = data
  i5592.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5593[0], i5592.m_PersistentCalls)
  return i5592
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5594 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5595 = data
  var i5597 = i5595[0]
  var i5596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5597.length; i += 1) {
    i5596.add(request.d('UnityEngine.Events.PersistentCall', i5597[i + 0]));
  }
  i5594.m_Calls = i5596
  return i5594
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5600 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5601 = data
  request.r(i5601[0], i5601[1], 0, i5600, 'm_Target')
  i5600.m_TargetAssemblyTypeName = i5601[2]
  i5600.m_MethodName = i5601[3]
  i5600.m_Mode = i5601[4]
  i5600.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5601[5], i5600.m_Arguments)
  i5600.m_CallState = i5601[6]
  return i5600
}

Deserializers["Tile"] = function (request, data, root) {
  var i5602 = root || request.c( 'Tile' )
  var i5603 = data
  request.r(i5603[0], i5603[1], 0, i5602, 'itemImage')
  request.r(i5603[2], i5603[3], 0, i5602, 'tileData')
  i5602.MovementMagnitude = i5603[4]
  i5602.MovementDuration = i5603[5]
  return i5602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5605 = data
  i5604.position = new pc.Vec3( i5605[0], i5605[1], i5605[2] )
  i5604.scale = new pc.Vec3( i5605[3], i5605[4], i5605[5] )
  i5604.rotation = new pc.Quat(i5605[6], i5605[7], i5605[8], i5605[9])
  return i5604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5607 = data
  i5606.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5607[0], i5606.main)
  i5606.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5607[1], i5606.colorBySpeed)
  i5606.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5607[2], i5606.colorOverLifetime)
  i5606.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5607[3], i5606.emission)
  i5606.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5607[4], i5606.rotationBySpeed)
  i5606.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5607[5], i5606.rotationOverLifetime)
  i5606.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5607[6], i5606.shape)
  i5606.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5607[7], i5606.sizeBySpeed)
  i5606.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5607[8], i5606.sizeOverLifetime)
  i5606.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5607[9], i5606.textureSheetAnimation)
  i5606.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5607[10], i5606.velocityOverLifetime)
  i5606.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5607[11], i5606.noise)
  i5606.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5607[12], i5606.inheritVelocity)
  i5606.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5607[13], i5606.forceOverLifetime)
  i5606.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5607[14], i5606.limitVelocityOverLifetime)
  i5606.useAutoRandomSeed = !!i5607[15]
  i5606.randomSeed = i5607[16]
  return i5606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5608 = root || new pc.ParticleSystemMain()
  var i5609 = data
  i5608.duration = i5609[0]
  i5608.loop = !!i5609[1]
  i5608.prewarm = !!i5609[2]
  i5608.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5609[3], i5608.startDelay)
  i5608.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5609[4], i5608.startLifetime)
  i5608.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5609[5], i5608.startSpeed)
  i5608.startSize3D = !!i5609[6]
  i5608.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5609[7], i5608.startSizeX)
  i5608.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5609[8], i5608.startSizeY)
  i5608.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5609[9], i5608.startSizeZ)
  i5608.startRotation3D = !!i5609[10]
  i5608.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5609[11], i5608.startRotationX)
  i5608.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5609[12], i5608.startRotationY)
  i5608.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5609[13], i5608.startRotationZ)
  i5608.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5609[14], i5608.startColor)
  i5608.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5609[15], i5608.gravityModifier)
  i5608.simulationSpace = i5609[16]
  request.r(i5609[17], i5609[18], 0, i5608, 'customSimulationSpace')
  i5608.simulationSpeed = i5609[19]
  i5608.useUnscaledTime = !!i5609[20]
  i5608.scalingMode = i5609[21]
  i5608.playOnAwake = !!i5609[22]
  i5608.maxParticles = i5609[23]
  i5608.emitterVelocityMode = i5609[24]
  i5608.stopAction = i5609[25]
  return i5608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5610 = root || new pc.MinMaxCurve()
  var i5611 = data
  i5610.mode = i5611[0]
  i5610.curveMin = new pc.AnimationCurve( { keys_flow: i5611[1] } )
  i5610.curveMax = new pc.AnimationCurve( { keys_flow: i5611[2] } )
  i5610.curveMultiplier = i5611[3]
  i5610.constantMin = i5611[4]
  i5610.constantMax = i5611[5]
  return i5610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5612 = root || new pc.MinMaxGradient()
  var i5613 = data
  i5612.mode = i5613[0]
  i5612.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5613[1], i5612.gradientMin)
  i5612.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5613[2], i5612.gradientMax)
  i5612.colorMin = new pc.Color(i5613[3], i5613[4], i5613[5], i5613[6])
  i5612.colorMax = new pc.Color(i5613[7], i5613[8], i5613[9], i5613[10])
  return i5612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5615 = data
  i5614.mode = i5615[0]
  var i5617 = i5615[1]
  var i5616 = []
  for(var i = 0; i < i5617.length; i += 1) {
    i5616.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5617[i + 0]) );
  }
  i5614.colorKeys = i5616
  var i5619 = i5615[2]
  var i5618 = []
  for(var i = 0; i < i5619.length; i += 1) {
    i5618.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5619[i + 0]) );
  }
  i5614.alphaKeys = i5618
  return i5614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5620 = root || new pc.ParticleSystemColorBySpeed()
  var i5621 = data
  i5620.enabled = !!i5621[0]
  i5620.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5621[1], i5620.color)
  i5620.range = new pc.Vec2( i5621[2], i5621[3] )
  return i5620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5625 = data
  i5624.color = new pc.Color(i5625[0], i5625[1], i5625[2], i5625[3])
  i5624.time = i5625[4]
  return i5624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5629 = data
  i5628.alpha = i5629[0]
  i5628.time = i5629[1]
  return i5628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5630 = root || new pc.ParticleSystemColorOverLifetime()
  var i5631 = data
  i5630.enabled = !!i5631[0]
  i5630.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5631[1], i5630.color)
  return i5630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5632 = root || new pc.ParticleSystemEmitter()
  var i5633 = data
  i5632.enabled = !!i5633[0]
  i5632.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5633[1], i5632.rateOverTime)
  i5632.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5633[2], i5632.rateOverDistance)
  var i5635 = i5633[3]
  var i5634 = []
  for(var i = 0; i < i5635.length; i += 1) {
    i5634.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5635[i + 0]) );
  }
  i5632.bursts = i5634
  return i5632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5638 = root || new pc.ParticleSystemBurst()
  var i5639 = data
  i5638.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5639[0], i5638.count)
  i5638.cycleCount = i5639[1]
  i5638.minCount = i5639[2]
  i5638.maxCount = i5639[3]
  i5638.repeatInterval = i5639[4]
  i5638.time = i5639[5]
  return i5638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5640 = root || new pc.ParticleSystemRotationBySpeed()
  var i5641 = data
  i5640.enabled = !!i5641[0]
  i5640.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5641[1], i5640.x)
  i5640.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5641[2], i5640.y)
  i5640.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5641[3], i5640.z)
  i5640.separateAxes = !!i5641[4]
  i5640.range = new pc.Vec2( i5641[5], i5641[6] )
  return i5640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5642 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5643 = data
  i5642.enabled = !!i5643[0]
  i5642.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5643[1], i5642.x)
  i5642.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5643[2], i5642.y)
  i5642.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5643[3], i5642.z)
  i5642.separateAxes = !!i5643[4]
  return i5642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5644 = root || new pc.ParticleSystemShape()
  var i5645 = data
  i5644.enabled = !!i5645[0]
  i5644.shapeType = i5645[1]
  i5644.randomDirectionAmount = i5645[2]
  i5644.sphericalDirectionAmount = i5645[3]
  i5644.randomPositionAmount = i5645[4]
  i5644.alignToDirection = !!i5645[5]
  i5644.radius = i5645[6]
  i5644.radiusMode = i5645[7]
  i5644.radiusSpread = i5645[8]
  i5644.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5645[9], i5644.radiusSpeed)
  i5644.radiusThickness = i5645[10]
  i5644.angle = i5645[11]
  i5644.length = i5645[12]
  i5644.boxThickness = new pc.Vec3( i5645[13], i5645[14], i5645[15] )
  i5644.meshShapeType = i5645[16]
  request.r(i5645[17], i5645[18], 0, i5644, 'mesh')
  request.r(i5645[19], i5645[20], 0, i5644, 'meshRenderer')
  request.r(i5645[21], i5645[22], 0, i5644, 'skinnedMeshRenderer')
  i5644.useMeshMaterialIndex = !!i5645[23]
  i5644.meshMaterialIndex = i5645[24]
  i5644.useMeshColors = !!i5645[25]
  i5644.normalOffset = i5645[26]
  i5644.arc = i5645[27]
  i5644.arcMode = i5645[28]
  i5644.arcSpread = i5645[29]
  i5644.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5645[30], i5644.arcSpeed)
  i5644.donutRadius = i5645[31]
  i5644.position = new pc.Vec3( i5645[32], i5645[33], i5645[34] )
  i5644.rotation = new pc.Vec3( i5645[35], i5645[36], i5645[37] )
  i5644.scale = new pc.Vec3( i5645[38], i5645[39], i5645[40] )
  return i5644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5646 = root || new pc.ParticleSystemSizeBySpeed()
  var i5647 = data
  i5646.enabled = !!i5647[0]
  i5646.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5647[1], i5646.x)
  i5646.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5647[2], i5646.y)
  i5646.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5647[3], i5646.z)
  i5646.separateAxes = !!i5647[4]
  i5646.range = new pc.Vec2( i5647[5], i5647[6] )
  return i5646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5648 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5649 = data
  i5648.enabled = !!i5649[0]
  i5648.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5649[1], i5648.x)
  i5648.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5649[2], i5648.y)
  i5648.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5649[3], i5648.z)
  i5648.separateAxes = !!i5649[4]
  return i5648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5650 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5651 = data
  i5650.enabled = !!i5651[0]
  i5650.mode = i5651[1]
  i5650.animation = i5651[2]
  i5650.numTilesX = i5651[3]
  i5650.numTilesY = i5651[4]
  i5650.useRandomRow = !!i5651[5]
  i5650.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5651[6], i5650.frameOverTime)
  i5650.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5651[7], i5650.startFrame)
  i5650.cycleCount = i5651[8]
  i5650.rowIndex = i5651[9]
  i5650.flipU = i5651[10]
  i5650.flipV = i5651[11]
  i5650.spriteCount = i5651[12]
  var i5653 = i5651[13]
  var i5652 = []
  for(var i = 0; i < i5653.length; i += 2) {
  request.r(i5653[i + 0], i5653[i + 1], 2, i5652, '')
  }
  i5650.sprites = i5652
  return i5650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5656 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5657 = data
  i5656.enabled = !!i5657[0]
  i5656.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5657[1], i5656.x)
  i5656.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5657[2], i5656.y)
  i5656.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5657[3], i5656.z)
  i5656.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5657[4], i5656.radial)
  i5656.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5657[5], i5656.speedModifier)
  i5656.space = i5657[6]
  i5656.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5657[7], i5656.orbitalX)
  i5656.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5657[8], i5656.orbitalY)
  i5656.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5657[9], i5656.orbitalZ)
  i5656.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5657[10], i5656.orbitalOffsetX)
  i5656.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5657[11], i5656.orbitalOffsetY)
  i5656.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5657[12], i5656.orbitalOffsetZ)
  return i5656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5658 = root || new pc.ParticleSystemNoise()
  var i5659 = data
  i5658.enabled = !!i5659[0]
  i5658.separateAxes = !!i5659[1]
  i5658.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5659[2], i5658.strengthX)
  i5658.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5659[3], i5658.strengthY)
  i5658.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5659[4], i5658.strengthZ)
  i5658.frequency = i5659[5]
  i5658.damping = !!i5659[6]
  i5658.octaveCount = i5659[7]
  i5658.octaveMultiplier = i5659[8]
  i5658.octaveScale = i5659[9]
  i5658.quality = i5659[10]
  i5658.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5659[11], i5658.scrollSpeed)
  i5658.scrollSpeedMultiplier = i5659[12]
  i5658.remapEnabled = !!i5659[13]
  i5658.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5659[14], i5658.remapX)
  i5658.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5659[15], i5658.remapY)
  i5658.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5659[16], i5658.remapZ)
  i5658.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5659[17], i5658.positionAmount)
  i5658.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5659[18], i5658.rotationAmount)
  i5658.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5659[19], i5658.sizeAmount)
  return i5658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5660 = root || new pc.ParticleSystemInheritVelocity()
  var i5661 = data
  i5660.enabled = !!i5661[0]
  i5660.mode = i5661[1]
  i5660.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5661[2], i5660.curve)
  return i5660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5662 = root || new pc.ParticleSystemForceOverLifetime()
  var i5663 = data
  i5662.enabled = !!i5663[0]
  i5662.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5663[1], i5662.x)
  i5662.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5663[2], i5662.y)
  i5662.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5663[3], i5662.z)
  i5662.space = i5663[4]
  i5662.randomized = !!i5663[5]
  return i5662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5664 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5665 = data
  i5664.enabled = !!i5665[0]
  i5664.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5665[1], i5664.limit)
  i5664.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5665[2], i5664.limitX)
  i5664.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5665[3], i5664.limitY)
  i5664.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5665[4], i5664.limitZ)
  i5664.dampen = i5665[5]
  i5664.separateAxes = !!i5665[6]
  i5664.space = i5665[7]
  i5664.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5665[8], i5664.drag)
  i5664.multiplyDragByParticleSize = !!i5665[9]
  i5664.multiplyDragByParticleVelocity = !!i5665[10]
  return i5664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5667 = data
  i5666.enabled = !!i5667[0]
  request.r(i5667[1], i5667[2], 0, i5666, 'sharedMaterial')
  var i5669 = i5667[3]
  var i5668 = []
  for(var i = 0; i < i5669.length; i += 2) {
  request.r(i5669[i + 0], i5669[i + 1], 2, i5668, '')
  }
  i5666.sharedMaterials = i5668
  i5666.receiveShadows = !!i5667[4]
  i5666.shadowCastingMode = i5667[5]
  i5666.sortingLayerID = i5667[6]
  i5666.sortingOrder = i5667[7]
  i5666.lightmapIndex = i5667[8]
  i5666.lightmapSceneIndex = i5667[9]
  i5666.lightmapScaleOffset = new pc.Vec4( i5667[10], i5667[11], i5667[12], i5667[13] )
  i5666.lightProbeUsage = i5667[14]
  i5666.reflectionProbeUsage = i5667[15]
  request.r(i5667[16], i5667[17], 0, i5666, 'mesh')
  i5666.meshCount = i5667[18]
  i5666.activeVertexStreamsCount = i5667[19]
  i5666.alignment = i5667[20]
  i5666.renderMode = i5667[21]
  i5666.sortMode = i5667[22]
  i5666.lengthScale = i5667[23]
  i5666.velocityScale = i5667[24]
  i5666.cameraVelocityScale = i5667[25]
  i5666.normalDirection = i5667[26]
  i5666.sortingFudge = i5667[27]
  i5666.minParticleSize = i5667[28]
  i5666.maxParticleSize = i5667[29]
  i5666.pivot = new pc.Vec3( i5667[30], i5667[31], i5667[32] )
  request.r(i5667[33], i5667[34], 0, i5666, 'trailMaterial')
  return i5666
}

Deserializers["CartoonFX.CFXR_Effect"] = function (request, data, root) {
  var i5670 = root || request.c( 'CartoonFX.CFXR_Effect' )
  var i5671 = data
  i5670.clearBehavior = i5671[0]
  i5670.cameraShake = request.d('CartoonFX.CFXR_Effect+CameraShake', i5671[1], i5670.cameraShake)
  var i5673 = i5671[2]
  var i5672 = []
  for(var i = 0; i < i5673.length; i += 1) {
    i5672.push( request.d('CartoonFX.CFXR_Effect+AnimatedLight', i5673[i + 0]) );
  }
  i5670.animatedLights = i5672
  request.r(i5671[3], i5671[4], 0, i5670, 'fadeOutReference')
  return i5670
}

Deserializers["CartoonFX.CFXR_Effect+CameraShake"] = function (request, data, root) {
  var i5674 = root || request.c( 'CartoonFX.CFXR_Effect+CameraShake' )
  var i5675 = data
  i5674.camEnabled = !!i5675[0]
  i5674.useMainCamera = !!i5675[1]
  var i5677 = i5675[2]
  var i5676 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i5677.length; i += 2) {
  request.r(i5677[i + 0], i5677[i + 1], 1, i5676, '')
  }
  i5674.cameras = i5676
  i5674.delay = i5675[3]
  i5674.duration = i5675[4]
  i5674.shakeSpace = i5675[5]
  i5674.shakeStrength = new pc.Vec3( i5675[6], i5675[7], i5675[8] )
  i5674.shakeCurve = new pc.AnimationCurve( { keys_flow: i5675[9] } )
  i5674.shakesDelay = i5675[10]
  return i5674
}

Deserializers["CartoonFX.CFXR_Effect+AnimatedLight"] = function (request, data, root) {
  var i5682 = root || request.c( 'CartoonFX.CFXR_Effect+AnimatedLight' )
  var i5683 = data
  request.r(i5683[0], i5683[1], 0, i5682, 'light')
  i5682.loop = !!i5683[2]
  i5682.animateIntensity = !!i5683[3]
  i5682.intensityStart = i5683[4]
  i5682.intensityEnd = i5683[5]
  i5682.intensityDuration = i5683[6]
  i5682.intensityCurve = new pc.AnimationCurve( { keys_flow: i5683[7] } )
  i5682.perlinIntensity = !!i5683[8]
  i5682.perlinIntensitySpeed = i5683[9]
  i5682.fadeIn = !!i5683[10]
  i5682.fadeInDuration = i5683[11]
  i5682.fadeOut = !!i5683[12]
  i5682.fadeOutDuration = i5683[13]
  i5682.animateRange = !!i5683[14]
  i5682.rangeStart = i5683[15]
  i5682.rangeEnd = i5683[16]
  i5682.rangeDuration = i5683[17]
  i5682.rangeCurve = new pc.AnimationCurve( { keys_flow: i5683[18] } )
  i5682.perlinRange = !!i5683[19]
  i5682.perlinRangeSpeed = i5683[20]
  i5682.animateColor = !!i5683[21]
  i5682.colorGradient = i5683[22] ? new pc.ColorGradient(i5683[22][0], i5683[22][1], i5683[22][2]) : null
  i5682.colorDuration = i5683[23]
  i5682.colorCurve = new pc.AnimationCurve( { keys_flow: i5683[24] } )
  i5682.perlinColor = !!i5683[25]
  i5682.perlinColorSpeed = i5683[26]
  return i5682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i5684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i5685 = data
  i5684.enabled = !!i5685[0]
  i5684.type = i5685[1]
  i5684.color = new pc.Color(i5685[2], i5685[3], i5685[4], i5685[5])
  i5684.cullingMask = i5685[6]
  i5684.intensity = i5685[7]
  i5684.range = i5685[8]
  i5684.spotAngle = i5685[9]
  i5684.shadows = i5685[10]
  i5684.shadowNormalBias = i5685[11]
  i5684.shadowBias = i5685[12]
  i5684.shadowStrength = i5685[13]
  i5684.shadowResolution = i5685[14]
  i5684.lightmapBakeType = i5685[15]
  i5684.renderMode = i5685[16]
  request.r(i5685[17], i5685[18], 0, i5684, 'cookie')
  i5684.cookieSize = i5685[19]
  return i5684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5687 = data
  i5686.name = i5687[0]
  i5686.halfPrecision = !!i5687[1]
  i5686.useUInt32IndexFormat = !!i5687[2]
  i5686.vertexCount = i5687[3]
  i5686.aabb = i5687[4]
  var i5689 = i5687[5]
  var i5688 = []
  for(var i = 0; i < i5689.length; i += 1) {
    i5688.push( !!i5689[i + 0] );
  }
  i5686.streams = i5688
  i5686.vertices = i5687[6]
  var i5691 = i5687[7]
  var i5690 = []
  for(var i = 0; i < i5691.length; i += 1) {
    i5690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5691[i + 0]) );
  }
  i5686.subMeshes = i5690
  var i5693 = i5687[8]
  var i5692 = []
  for(var i = 0; i < i5693.length; i += 16) {
    i5692.push( new pc.Mat4().setData(i5693[i + 0], i5693[i + 1], i5693[i + 2], i5693[i + 3],  i5693[i + 4], i5693[i + 5], i5693[i + 6], i5693[i + 7],  i5693[i + 8], i5693[i + 9], i5693[i + 10], i5693[i + 11],  i5693[i + 12], i5693[i + 13], i5693[i + 14], i5693[i + 15]) );
  }
  i5686.bindposes = i5692
  var i5695 = i5687[9]
  var i5694 = []
  for(var i = 0; i < i5695.length; i += 1) {
    i5694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5695[i + 0]) );
  }
  i5686.blendShapes = i5694
  return i5686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5701 = data
  i5700.triangles = i5701[0]
  return i5700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5707 = data
  i5706.name = i5707[0]
  var i5709 = i5707[1]
  var i5708 = []
  for(var i = 0; i < i5709.length; i += 1) {
    i5708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5709[i + 0]) );
  }
  i5706.frames = i5708
  return i5706
}

Deserializers["AnimatedTile"] = function (request, data, root) {
  var i5710 = root || request.c( 'AnimatedTile' )
  var i5711 = data
  i5710.Duration = i5711[0]
  request.r(i5711[1], i5711[2], 0, i5710, 'tileData')
  var i5713 = i5711[3]
  var i5712 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i5713.length; i += 3) {
    i5712.add(new pc.Vec3( i5713[i + 0], i5713[i + 1], i5713[i + 2] ));
  }
  i5710.targetPos = i5712
  var i5715 = i5711[4]
  var i5714 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i5715.length; i += 3) {
    i5714.add(new pc.Vec3( i5715[i + 0], i5715[i + 1], i5715[i + 2] ));
  }
  i5710.targetPosPortrait = i5714
  var i5717 = i5711[5]
  var i5716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i5717.length; i += 3) {
    i5716.add(new pc.Vec3( i5717[i + 0], i5717[i + 1], i5717[i + 2] ));
  }
  i5710.targetPosLandscape = i5716
  var i5719 = i5711[6]
  var i5718 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i5719.length; i += 1) {
    i5718.add(i5719[i + 0]);
  }
  i5710.targets = i5718
  request.r(i5711[7], i5711[8], 0, i5710, 'image')
  var i5721 = i5711[9]
  var i5720 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i5721.length; i += 2) {
  request.r(i5721[i + 0], i5721[i + 1], 1, i5720, '')
  }
  i5710.vfxParticles = i5720
  request.r(i5711[10], i5711[11], 0, i5710, 'trailVFXPrefab')
  request.r(i5711[12], i5711[13], 0, i5710, 'circleTrailVFXPrefab')
  request.r(i5711[14], i5711[15], 0, i5710, 'trailRenderer')
  return i5710
}

Deserializers["StateEvents"] = function (request, data, root) {
  var i5728 = root || request.c( 'StateEvents' )
  var i5729 = data
  i5728.OnEnableEvent = request.d('UnityEngine.Events.UnityEvent', i5729[0], i5728.OnEnableEvent)
  i5728.OnDisableEvent = request.d('UnityEngine.Events.UnityEvent', i5729[1], i5728.OnDisableEvent)
  i5728.OnStartEvent = request.d('UnityEngine.Events.UnityEvent', i5729[2], i5728.OnStartEvent)
  i5728.autoEnable = !!i5729[3]
  i5728.autoEnableDelay = i5729[4]
  i5728.autoDisableDelay = i5729[5]
  return i5728
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5730 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5731 = data
  request.r(i5731[0], i5731[1], 0, i5730, 'm_ObjectArgument')
  i5730.m_ObjectArgumentAssemblyTypeName = i5731[2]
  i5730.m_IntArgument = i5731[3]
  i5730.m_FloatArgument = i5731[4]
  i5730.m_StringArgument = i5731[5]
  i5730.m_BoolArgument = !!i5731[6]
  return i5730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i5732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i5733 = data
  i5732.enabled = !!i5733[0]
  request.r(i5733[1], i5733[2], 0, i5732, 'sharedMaterial')
  var i5735 = i5733[3]
  var i5734 = []
  for(var i = 0; i < i5735.length; i += 2) {
  request.r(i5735[i + 0], i5735[i + 1], 2, i5734, '')
  }
  i5732.sharedMaterials = i5734
  i5732.receiveShadows = !!i5733[4]
  i5732.shadowCastingMode = i5733[5]
  i5732.sortingLayerID = i5733[6]
  i5732.sortingOrder = i5733[7]
  i5732.lightmapIndex = i5733[8]
  i5732.lightmapSceneIndex = i5733[9]
  i5732.lightmapScaleOffset = new pc.Vec4( i5733[10], i5733[11], i5733[12], i5733[13] )
  i5732.lightProbeUsage = i5733[14]
  i5732.reflectionProbeUsage = i5733[15]
  var i5737 = i5733[16]
  var i5736 = []
  for(var i = 0; i < i5737.length; i += 3) {
    i5736.push( new pc.Vec3( i5737[i + 0], i5737[i + 1], i5737[i + 2] ) );
  }
  i5732.positions = i5736
  i5732.positionCount = i5733[17]
  i5732.time = i5733[18]
  i5732.startWidth = i5733[19]
  i5732.endWidth = i5733[20]
  i5732.widthMultiplier = i5733[21]
  i5732.autodestruct = !!i5733[22]
  i5732.emitting = !!i5733[23]
  i5732.numCornerVertices = i5733[24]
  i5732.numCapVertices = i5733[25]
  i5732.minVertexDistance = i5733[26]
  i5732.colorGradient = i5733[27] ? new pc.ColorGradient(i5733[27][0], i5733[27][1], i5733[27][2]) : null
  i5732.startColor = new pc.Color(i5733[28], i5733[29], i5733[30], i5733[31])
  i5732.endColor = new pc.Color(i5733[32], i5733[33], i5733[34], i5733[35])
  i5732.generateLightingData = !!i5733[36]
  i5732.textureMode = i5733[37]
  i5732.alignment = i5733[38]
  i5732.widthCurve = new pc.AnimationCurve( { keys_flow: i5733[39] } )
  return i5732
}

Deserializers["PositionTracking"] = function (request, data, root) {
  var i5740 = root || request.c( 'PositionTracking' )
  var i5741 = data
  return i5740
}

Deserializers["PNGSequencer"] = function (request, data, root) {
  var i5742 = root || request.c( 'PNGSequencer' )
  var i5743 = data
  i5742.frameRate = i5743[0]
  var i5745 = i5743[1]
  var i5744 = new (System.Collections.Generic.List$1(Bridge.ns('Animations')))
  for(var i = 0; i < i5745.length; i += 1) {
    i5744.add(request.d('Animations', i5745[i + 0]));
  }
  i5742.animations = i5744
  i5742.loop = !!i5743[2]
  i5742.playOnStart = !!i5743[3]
  i5742.isUIElement = !!i5743[4]
  request.r(i5743[5], i5743[6], 0, i5742, 'targetImage')
  request.r(i5743[7], i5743[8], 0, i5742, 'targetRenderer')
  return i5742
}

Deserializers["Animations"] = function (request, data, root) {
  var i5748 = root || request.c( 'Animations' )
  var i5749 = data
  i5748.name = i5749[0]
  i5748.isLooping = !!i5749[1]
  i5748.frameRate = i5749[2]
  var i5751 = i5749[3]
  var i5750 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i5751.length; i += 2) {
  request.r(i5751[i + 0], i5751[i + 1], 1, i5750, '')
  }
  i5748.frames = i5750
  i5748.transitionToNextAnimation = !!i5749[4]
  i5748.nextAnimationName = i5749[5]
  return i5748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5755 = data
  i5754.name = i5755[0]
  i5754.index = i5755[1]
  i5754.startup = !!i5755[2]
  return i5754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5757 = data
  i5756.enabled = !!i5757[0]
  i5756.aspect = i5757[1]
  i5756.orthographic = !!i5757[2]
  i5756.orthographicSize = i5757[3]
  i5756.backgroundColor = new pc.Color(i5757[4], i5757[5], i5757[6], i5757[7])
  i5756.nearClipPlane = i5757[8]
  i5756.farClipPlane = i5757[9]
  i5756.fieldOfView = i5757[10]
  i5756.depth = i5757[11]
  i5756.clearFlags = i5757[12]
  i5756.cullingMask = i5757[13]
  i5756.rect = i5757[14]
  request.r(i5757[15], i5757[16], 0, i5756, 'targetTexture')
  i5756.usePhysicalProperties = !!i5757[17]
  i5756.focalLength = i5757[18]
  i5756.sensorSize = new pc.Vec2( i5757[19], i5757[20] )
  i5756.lensShift = new pc.Vec2( i5757[21], i5757[22] )
  i5756.gateFit = i5757[23]
  i5756.commandBufferCount = i5757[24]
  i5756.cameraType = i5757[25]
  return i5756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5759 = data
  i5758.enabled = !!i5759[0]
  i5758.planeDistance = i5759[1]
  i5758.referencePixelsPerUnit = i5759[2]
  i5758.isFallbackOverlay = !!i5759[3]
  i5758.renderMode = i5759[4]
  i5758.renderOrder = i5759[5]
  i5758.sortingLayerName = i5759[6]
  i5758.sortingOrder = i5759[7]
  i5758.scaleFactor = i5759[8]
  request.r(i5759[9], i5759[10], 0, i5758, 'worldCamera')
  i5758.overrideSorting = !!i5759[11]
  i5758.pixelPerfect = !!i5759[12]
  i5758.targetDisplay = i5759[13]
  i5758.overridePixelPerfect = !!i5759[14]
  return i5758
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5760 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5761 = data
  i5760.m_UiScaleMode = i5761[0]
  i5760.m_ReferencePixelsPerUnit = i5761[1]
  i5760.m_ScaleFactor = i5761[2]
  i5760.m_ReferenceResolution = new pc.Vec2( i5761[3], i5761[4] )
  i5760.m_ScreenMatchMode = i5761[5]
  i5760.m_MatchWidthOrHeight = i5761[6]
  i5760.m_PhysicalUnit = i5761[7]
  i5760.m_FallbackScreenDPI = i5761[8]
  i5760.m_DefaultSpriteDPI = i5761[9]
  i5760.m_DynamicPixelsPerUnit = i5761[10]
  i5760.m_PresetInfoIsWorld = !!i5761[11]
  return i5760
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5762 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5763 = data
  i5762.m_IgnoreReversedGraphics = !!i5763[0]
  i5762.m_BlockingObjects = i5763[1]
  i5762.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5763[2] )
  return i5762
}

Deserializers["BasicFade"] = function (request, data, root) {
  var i5764 = root || request.c( 'BasicFade' )
  var i5765 = data
  request.r(i5765[0], i5765[1], 0, i5764, 'canvasGroup')
  i5764.duration = i5765[2]
  return i5764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i5766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i5767 = data
  i5766.m_Alpha = i5767[0]
  i5766.m_Interactable = !!i5767[1]
  i5766.m_BlocksRaycasts = !!i5767[2]
  i5766.m_IgnoreParentGroups = !!i5767[3]
  i5766.enabled = !!i5767[4]
  return i5766
}

Deserializers["AppearAnimation"] = function (request, data, root) {
  var i5768 = root || request.c( 'AppearAnimation' )
  var i5769 = data
  i5768.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i5769[0], i5768.OnMovementComplete)
  i5768.fadeInDuration = i5769[1]
  i5768.fadeInDelay = i5769[2]
  i5768.fillDuration = i5769[3]
  i5768.fillDelay = i5769[4]
  i5768.targetFillAmount = i5769[5]
  i5768.initialFillAmount = i5769[6]
  return i5768
}

Deserializers["PlayerGuide"] = function (request, data, root) {
  var i5770 = root || request.c( 'PlayerGuide' )
  var i5771 = data
  var i5773 = i5771[0]
  var i5772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5773.length; i += 2) {
  request.r(i5773[i + 0], i5773[i + 1], 1, i5772, '')
  }
  i5770.prompts = i5772
  return i5770
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5776 = root || request.c( 'UnityEngine.UI.Button' )
  var i5777 = data
  i5776.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5777[0], i5776.m_OnClick)
  i5776.m_Navigation = request.d('UnityEngine.UI.Navigation', i5777[1], i5776.m_Navigation)
  i5776.m_Transition = i5777[2]
  i5776.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5777[3], i5776.m_Colors)
  i5776.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5777[4], i5776.m_SpriteState)
  i5776.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5777[5], i5776.m_AnimationTriggers)
  i5776.m_Interactable = !!i5777[6]
  request.r(i5777[7], i5777[8], 0, i5776, 'm_TargetGraphic')
  return i5776
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5778 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5779 = data
  i5778.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5779[0], i5778.m_PersistentCalls)
  return i5778
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5780 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5781 = data
  i5780.m_Mode = i5781[0]
  i5780.m_WrapAround = !!i5781[1]
  request.r(i5781[2], i5781[3], 0, i5780, 'm_SelectOnUp')
  request.r(i5781[4], i5781[5], 0, i5780, 'm_SelectOnDown')
  request.r(i5781[6], i5781[7], 0, i5780, 'm_SelectOnLeft')
  request.r(i5781[8], i5781[9], 0, i5780, 'm_SelectOnRight')
  return i5780
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5782 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5783 = data
  i5782.m_NormalColor = new pc.Color(i5783[0], i5783[1], i5783[2], i5783[3])
  i5782.m_HighlightedColor = new pc.Color(i5783[4], i5783[5], i5783[6], i5783[7])
  i5782.m_PressedColor = new pc.Color(i5783[8], i5783[9], i5783[10], i5783[11])
  i5782.m_SelectedColor = new pc.Color(i5783[12], i5783[13], i5783[14], i5783[15])
  i5782.m_DisabledColor = new pc.Color(i5783[16], i5783[17], i5783[18], i5783[19])
  i5782.m_ColorMultiplier = i5783[20]
  i5782.m_FadeDuration = i5783[21]
  return i5782
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5784 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5785 = data
  request.r(i5785[0], i5785[1], 0, i5784, 'm_HighlightedSprite')
  request.r(i5785[2], i5785[3], 0, i5784, 'm_PressedSprite')
  request.r(i5785[4], i5785[5], 0, i5784, 'm_SelectedSprite')
  request.r(i5785[6], i5785[7], 0, i5784, 'm_DisabledSprite')
  return i5784
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5786 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5787 = data
  i5786.m_NormalTrigger = i5787[0]
  i5786.m_HighlightedTrigger = i5787[1]
  i5786.m_PressedTrigger = i5787[2]
  i5786.m_SelectedTrigger = i5787[3]
  i5786.m_DisabledTrigger = i5787[4]
  return i5786
}

Deserializers["RectAnimator"] = function (request, data, root) {
  var i5788 = root || request.c( 'RectAnimator' )
  var i5789 = data
  request.r(i5789[0], i5789[1], 0, i5788, 'rectTransform')
  i5788.animateScale = !!i5789[2]
  i5788.isScaleLooping = !!i5789[3]
  i5788.scaleTo = i5789[4]
  i5788.scaleDuration = i5789[5]
  i5788.scaleEaseType = i5789[6]
  i5788.scaleStartDelay = i5789[7]
  i5788.animateMove = !!i5789[8]
  i5788.isMoveLooping = !!i5789[9]
  i5788.moveTo = new pc.Vec2( i5789[10], i5789[11] )
  i5788.moveDuration = i5789[12]
  i5788.moveEaseType = i5789[13]
  i5788.moveLoopType = i5789[14]
  i5788.moveStartDelay = i5789[15]
  i5788.initialPos = new pc.Vec3( i5789[16], i5789[17], i5789[18] )
  i5788.initialScale = new pc.Vec3( i5789[19], i5789[20], i5789[21] )
  return i5788
}

Deserializers["TileManager"] = function (request, data, root) {
  var i5790 = root || request.c( 'TileManager' )
  var i5791 = data
  i5790.cellWidth = i5791[0]
  i5790.cellHeight = i5791[1]
  request.r(i5791[2], i5791[3], 0, i5790, 'canvasGroup')
  var i5793 = i5791[4]
  var i5792 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i5793.length; i += 2) {
  request.r(i5793[i + 0], i5793[i + 1], 1, i5792, '')
  }
  i5790.cells = i5792
  var i5795 = i5791[5]
  var i5794 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i5795.length; i += 2) {
  request.r(i5795[i + 0], i5795[i + 1], 1, i5794, '')
  }
  i5790.tileDataPool = i5794
  i5790.GridHeight = i5791[6]
  i5790.SequenceDelay = i5791[7]
  i5790.BreakDelay = i5791[8]
  i5790.FallDelay = i5791[9]
  i5790.CheckDelay = i5791[10]
  i5790.levelColorValues = i5791[11]
  var i5797 = i5791[12]
  var i5796 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i5797.length; i += 2) {
  request.r(i5797[i + 0], i5797[i + 1], 1, i5796, '')
  }
  i5790.powerupDataPool = i5796
  request.r(i5791[13], i5791[14], 0, i5790, 'dynamitePowerup')
  return i5790
}

Deserializers["SpecialTileManager"] = function (request, data, root) {
  var i5802 = root || request.c( 'SpecialTileManager' )
  var i5803 = data
  request.r(i5803[0], i5803[1], 0, i5802, 'tileManager')
  var i5805 = i5803[2]
  var i5804 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i5805.length; i += 2) {
  request.r(i5805[i + 0], i5805[i + 1], 1, i5804, '')
  }
  i5802.cellList = i5804
  var i5807 = i5803[3]
  var i5806 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonGraphic')))
  for(var i = 0; i < i5807.length; i += 2) {
  request.r(i5807[i + 0], i5807[i + 1], 1, i5806, '')
  }
  i5802.SpecialTiles = i5806
  i5802.specialTileTargetPos = i5803[4]
  i5802.pigPos = i5803[5]
  i5802.chickenPos = i5803[6]
  return i5802
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i5810 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i5811 = data
  i5810.m_Spacing = i5811[0]
  i5810.m_ChildForceExpandWidth = !!i5811[1]
  i5810.m_ChildForceExpandHeight = !!i5811[2]
  i5810.m_ChildControlWidth = !!i5811[3]
  i5810.m_ChildControlHeight = !!i5811[4]
  i5810.m_ChildScaleWidth = !!i5811[5]
  i5810.m_ChildScaleHeight = !!i5811[6]
  i5810.m_ReverseArrangement = !!i5811[7]
  i5810.m_Padding = UnityEngine.RectOffset.FromPaddings(i5811[8], i5811[9], i5811[10], i5811[11])
  i5810.m_ChildAlignment = i5811[12]
  return i5810
}

Deserializers["UIMoveTo"] = function (request, data, root) {
  var i5812 = root || request.c( 'UIMoveTo' )
  var i5813 = data
  request.r(i5813[0], i5813[1], 0, i5812, 'imageTransform')
  i5812.targetPosition = new pc.Vec2( i5813[2], i5813[3] )
  i5812.anticipationOffset = i5813[4]
  i5812.duration = i5813[5]
  i5812.enableOnStart = !!i5813[6]
  i5812.delayBeforeStart = i5813[7]
  i5812.delayBeforeEnd = i5813[8]
  i5812.OnMovementStart = request.d('UnityEngine.Events.UnityEvent', i5813[9], i5812.OnMovementStart)
  i5812.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i5813[10], i5812.OnMovementComplete)
  var i5815 = i5813[11]
  var i5814 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5815.length; i += 2) {
  request.r(i5815[i + 0], i5815[i + 1], 1, i5814, '')
  }
  i5812.objectsToEnable = i5814
  return i5812
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i5816 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i5817 = data
  i5816.m_StartCorner = i5817[0]
  i5816.m_StartAxis = i5817[1]
  i5816.m_CellSize = new pc.Vec2( i5817[2], i5817[3] )
  i5816.m_Spacing = new pc.Vec2( i5817[4], i5817[5] )
  i5816.m_Constraint = i5817[6]
  i5816.m_ConstraintCount = i5817[7]
  i5816.m_Padding = UnityEngine.RectOffset.FromPaddings(i5817[8], i5817[9], i5817[10], i5817[11])
  i5816.m_ChildAlignment = i5817[12]
  return i5816
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i5818 = root || request.c( 'UnityEngine.UI.Mask' )
  var i5819 = data
  i5818.m_ShowMaskGraphic = !!i5819[0]
  return i5818
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i5820 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i5821 = data
  request.r(i5821[0], i5821[1], 0, i5820, 'skeletonDataAsset')
  request.r(i5821[2], i5821[3], 0, i5820, 'additiveMaterial')
  request.r(i5821[4], i5821[5], 0, i5820, 'multiplyMaterial')
  request.r(i5821[6], i5821[7], 0, i5820, 'screenMaterial')
  i5820.initialSkinName = i5821[8]
  i5820.initialFlipX = !!i5821[9]
  i5820.initialFlipY = !!i5821[10]
  i5820.startingAnimation = i5821[11]
  i5820.startingLoop = !!i5821[12]
  i5820.timeScale = i5821[13]
  i5820.freeze = !!i5821[14]
  i5820.layoutScaleMode = i5821[15]
  i5820.updateWhenInvisible = i5821[16]
  i5820.allowMultipleCanvasRenderers = !!i5821[17]
  var i5823 = i5821[18]
  var i5822 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i5823.length; i += 2) {
  request.r(i5823[i + 0], i5823[i + 1], 1, i5822, '')
  }
  i5820.canvasRenderers = i5822
  i5820.enableSeparatorSlots = !!i5821[19]
  i5820.updateSeparatorPartLocation = !!i5821[20]
  i5820.updateSeparatorPartScale = !!i5821[21]
  i5820.disableMeshAssignmentOnOverride = !!i5821[22]
  i5820.m_SkeletonColor = new pc.Color(i5821[23], i5821[24], i5821[25], i5821[26])
  i5820.referenceSize = new pc.Vec2( i5821[27], i5821[28] )
  i5820.pivotOffset = new pc.Vec2( i5821[29], i5821[30] )
  i5820.referenceScale = i5821[31]
  i5820.layoutScale = i5821[32]
  i5820.rectTransformSize = new pc.Vec2( i5821[33], i5821[34] )
  i5820.editReferenceRect = !!i5821[35]
  var i5825 = i5821[36]
  var i5824 = []
  for(var i = 0; i < i5825.length; i += 1) {
    i5824.push( i5825[i + 0] );
  }
  i5820.separatorSlotNames = i5824
  var i5827 = i5821[37]
  var i5826 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i5827.length; i += 2) {
  request.r(i5827[i + 0], i5827[i + 1], 1, i5826, '')
  }
  i5820.separatorParts = i5826
  i5820.physicsPositionInheritanceFactor = new pc.Vec2( i5821[38], i5821[39] )
  i5820.physicsRotationInheritanceFactor = i5821[40]
  request.r(i5821[41], i5821[42], 0, i5820, 'physicsMovementRelativeTo')
  i5820.meshGenerator = request.d('Spine.Unity.MeshGenerator', i5821[43], i5820.meshGenerator)
  i5820.updateTiming = i5821[44]
  i5820.unscaledTime = !!i5821[45]
  request.r(i5821[46], i5821[47], 0, i5820, 'm_Material')
  i5820.m_Maskable = !!i5821[48]
  i5820.m_Color = new pc.Color(i5821[49], i5821[50], i5821[51], i5821[52])
  i5820.m_RaycastTarget = !!i5821[53]
  i5820.m_RaycastPadding = new pc.Vec4( i5821[54], i5821[55], i5821[56], i5821[57] )
  return i5820
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i5834 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i5835 = data
  i5834.settings = request.d('Spine.Unity.MeshGenerator+Settings', i5835[0], i5834.settings)
  return i5834
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i5836 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i5837 = data
  i5836.useClipping = !!i5837[0]
  i5836.zSpacing = i5837[1]
  i5836.tintBlack = !!i5837[2]
  i5836.canvasGroupCompatible = !!i5837[3]
  i5836.pmaVertexColors = !!i5837[4]
  i5836.addNormals = !!i5837[5]
  i5836.calculateTangents = !!i5837[6]
  i5836.immutableTriangles = !!i5837[7]
  return i5836
}

Deserializers["AnimatedTileSpawner"] = function (request, data, root) {
  var i5838 = root || request.c( 'AnimatedTileSpawner' )
  var i5839 = data
  var i5841 = i5839[0]
  var i5840 = new (System.Collections.Generic.List$1(Bridge.ns('AnimatedTile')))
  for(var i = 0; i < i5841.length; i += 2) {
  request.r(i5841[i + 0], i5841[i + 1], 1, i5840, '')
  }
  i5838.tiles = i5840
  var i5843 = i5839[1]
  var i5842 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5843.length; i += 2) {
  request.r(i5843[i + 0], i5843[i + 1], 1, i5842, '')
  }
  i5838.cornVFX = i5842
  return i5838
}

Deserializers["DynamiteEffect"] = function (request, data, root) {
  var i5846 = root || request.c( 'DynamiteEffect' )
  var i5847 = data
  i5846.initialScale = new pc.Vec3( i5847[0], i5847[1], i5847[2] )
  i5846.targetPos = new pc.Vec3( i5847[3], i5847[4], i5847[5] )
  i5846.duration = i5847[6]
  request.r(i5847[7], i5847[8], 0, i5846, 'model')
  request.r(i5847[9], i5847[10], 0, i5846, 'explosionEffectPrefab')
  return i5846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5849 = data
  i5848.enabled = !!i5849[0]
  request.r(i5849[1], i5849[2], 0, i5848, 'sharedMaterial')
  var i5851 = i5849[3]
  var i5850 = []
  for(var i = 0; i < i5851.length; i += 2) {
  request.r(i5851[i + 0], i5851[i + 1], 2, i5850, '')
  }
  i5848.sharedMaterials = i5850
  i5848.receiveShadows = !!i5849[4]
  i5848.shadowCastingMode = i5849[5]
  i5848.sortingLayerID = i5849[6]
  i5848.sortingOrder = i5849[7]
  i5848.lightmapIndex = i5849[8]
  i5848.lightmapSceneIndex = i5849[9]
  i5848.lightmapScaleOffset = new pc.Vec4( i5849[10], i5849[11], i5849[12], i5849[13] )
  i5848.lightProbeUsage = i5849[14]
  i5848.reflectionProbeUsage = i5849[15]
  i5848.color = new pc.Color(i5849[16], i5849[17], i5849[18], i5849[19])
  request.r(i5849[20], i5849[21], 0, i5848, 'sprite')
  i5848.flipX = !!i5849[22]
  i5848.flipY = !!i5849[23]
  i5848.drawMode = i5849[24]
  i5848.size = new pc.Vec2( i5849[25], i5849[26] )
  i5848.tileMode = i5849[27]
  i5848.adaptiveModeThreshold = i5849[28]
  i5848.maskInteraction = i5849[29]
  i5848.spriteSortPoint = i5849[30]
  return i5848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5853 = data
  request.r(i5853[0], i5853[1], 0, i5852, 'animatorController')
  request.r(i5853[2], i5853[3], 0, i5852, 'avatar')
  i5852.updateMode = i5853[4]
  i5852.hasTransformHierarchy = !!i5853[5]
  i5852.applyRootMotion = !!i5853[6]
  var i5855 = i5853[7]
  var i5854 = []
  for(var i = 0; i < i5855.length; i += 2) {
  request.r(i5855[i + 0], i5855[i + 1], 2, i5854, '')
  }
  i5852.humanBones = i5854
  i5852.enabled = !!i5853[8]
  return i5852
}

Deserializers["MergeHands"] = function (request, data, root) {
  var i5858 = root || request.c( 'MergeHands' )
  var i5859 = data
  request.r(i5859[0], i5859[1], 0, i5858, 'rectTransform')
  request.r(i5859[2], i5859[3], 0, i5858, 'target1')
  request.r(i5859[4], i5859[5], 0, i5858, 'target2')
  return i5858
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5860 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5861 = data
  request.r(i5861[0], i5861[1], 0, i5860, 'm_FirstSelected')
  i5860.m_sendNavigationEvents = !!i5861[2]
  i5860.m_DragThreshold = i5861[3]
  return i5860
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5862 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5863 = data
  i5862.m_HorizontalAxis = i5863[0]
  i5862.m_VerticalAxis = i5863[1]
  i5862.m_SubmitButton = i5863[2]
  i5862.m_CancelButton = i5863[3]
  i5862.m_InputActionsPerSecond = i5863[4]
  i5862.m_RepeatDelay = i5863[5]
  i5862.m_ForceModuleActive = !!i5863[6]
  i5862.m_SendPointerHoverToParent = !!i5863[7]
  return i5862
}

Deserializers["GameManager"] = function (request, data, root) {
  var i5864 = root || request.c( 'GameManager' )
  var i5865 = data
  i5864.IsSIP = !!i5865[0]
  i5864.gameType = i5865[1]
  i5864.toggleInactivityPanel = !!i5865[2]
  i5864.OnStartMIP1 = request.d('UnityEngine.Events.UnityEvent', i5865[3], i5864.OnStartMIP1)
  i5864.OnStartMIP2 = request.d('UnityEngine.Events.UnityEvent', i5865[4], i5864.OnStartMIP2)
  i5864.IsDoneCollecting = !!i5865[5]
  i5864.OnLevelComplete = request.d('UnityEngine.Events.UnityEvent', i5865[6], i5864.OnLevelComplete)
  request.r(i5865[7], i5865[8], 0, i5864, 'TutorialPanel')
  request.r(i5865[9], i5865[10], 0, i5864, 'GamePanel')
  request.r(i5865[11], i5865[12], 0, i5864, 'EndCard')
  request.r(i5865[13], i5865[14], 0, i5864, 'CTAPanel')
  request.r(i5865[15], i5865[16], 0, i5864, 'FailPanel')
  request.r(i5865[17], i5865[18], 0, i5864, 'EndCardInActivityPanel')
  i5864.iosLink = i5865[19]
  i5864.androidLink = i5865[20]
  i5864.hasTimer = !!i5865[21]
  i5864.currentTimer = i5865[22]
  i5864.maxTime = i5865[23]
  i5864.gameOver = !!i5865[24]
  request.r(i5865[25], i5865[26], 0, i5864, 'inactivityPanel')
  request.r(i5865[27], i5865[28], 0, i5864, 'inactivityPanelGame')
  i5864.inactivityTime = i5865[29]
  i5864.inactivityTimer = i5865[30]
  request.r(i5865[31], i5865[32], 0, i5864, 'timerText')
  var i5867 = i5865[33]
  var i5866 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i5867.length; i += 1) {
    i5866.add(request.d('GameManager+FurnitureItems', i5867[i + 0]));
  }
  i5864.items = i5866
  i5864.CurrentLevel = i5865[34]
  var i5869 = i5865[35]
  var i5868 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i5869.length; i += 1) {
    i5868.add(request.d('GameManager+FurnitureItems', i5869[i + 0]));
  }
  i5864.currentFurnitures = i5868
  var i5871 = i5865[36]
  var i5870 = new (System.Collections.Generic.List$1(Bridge.ns('BasicFade')))
  for(var i = 0; i < i5871.length; i += 2) {
  request.r(i5871[i + 0], i5871[i + 1], 1, i5870, '')
  }
  i5864.gameBoards = i5870
  var i5873 = i5865[37]
  var i5872 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationBase')))
  for(var i = 0; i < i5873.length; i += 2) {
  request.r(i5873[i + 0], i5873[i + 1], 1, i5872, '')
  }
  i5864.furnitureDecorations = i5872
  var i5875 = i5865[38]
  var i5874 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5875.length; i += 2) {
  request.r(i5875[i + 0], i5875[i + 1], 1, i5874, '')
  }
  i5864.mip1Objects = i5874
  var i5877 = i5865[39]
  var i5876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5877.length; i += 2) {
  request.r(i5877[i + 0], i5877[i + 1], 1, i5876, '')
  }
  i5864.mip2Objects = i5876
  var i5879 = i5865[40]
  var i5878 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5879.length; i += 2) {
  request.r(i5879[i + 0], i5879[i + 1], 1, i5878, '')
  }
  i5864.Feedback = i5878
  var i5881 = i5865[41]
  var i5880 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i5881.length; i += 1) {
    i5880.add(i5881[i + 0]);
  }
  i5864.audioKeys = i5880
  var i5883 = i5865[42]
  var i5882 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i5883.length; i += 1) {
    i5882.add(i5883[i + 0]);
  }
  i5864.cameraPanLocation = i5882
  request.r(i5865[43], i5865[44], 0, i5864, 'cameraPanObject')
  i5864.mip1ButtonPress = !!i5865[45]
  i5864.puzzlesToSolve = i5865[46]
  var i5885 = i5865[47]
  var i5884 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5885.length; i += 2) {
  request.r(i5885[i + 0], i5885[i + 1], 1, i5884, '')
  }
  i5864.redirectButtons = i5884
  return i5864
}

Deserializers["GameManager+FurnitureItems"] = function (request, data, root) {
  var i5888 = root || request.c( 'GameManager+FurnitureItems' )
  var i5889 = data
  i5888.key = i5889[0]
  request.r(i5889[1], i5889[2], 0, i5888, 'value')
  return i5888
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i5896 = root || request.c( 'AudioManager' )
  var i5897 = data
  request.r(i5897[0], i5897[1], 0, i5896, 'library')
  i5896.sfxPoolSize = i5897[2]
  return i5896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5899 = data
  i5898.ambientIntensity = i5899[0]
  i5898.reflectionIntensity = i5899[1]
  i5898.ambientMode = i5899[2]
  i5898.ambientLight = new pc.Color(i5899[3], i5899[4], i5899[5], i5899[6])
  i5898.ambientSkyColor = new pc.Color(i5899[7], i5899[8], i5899[9], i5899[10])
  i5898.ambientGroundColor = new pc.Color(i5899[11], i5899[12], i5899[13], i5899[14])
  i5898.ambientEquatorColor = new pc.Color(i5899[15], i5899[16], i5899[17], i5899[18])
  i5898.fogColor = new pc.Color(i5899[19], i5899[20], i5899[21], i5899[22])
  i5898.fogEndDistance = i5899[23]
  i5898.fogStartDistance = i5899[24]
  i5898.fogDensity = i5899[25]
  i5898.fog = !!i5899[26]
  request.r(i5899[27], i5899[28], 0, i5898, 'skybox')
  i5898.fogMode = i5899[29]
  var i5901 = i5899[30]
  var i5900 = []
  for(var i = 0; i < i5901.length; i += 1) {
    i5900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5901[i + 0]) );
  }
  i5898.lightmaps = i5900
  i5898.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5899[31], i5898.lightProbes)
  i5898.lightmapsMode = i5899[32]
  i5898.mixedBakeMode = i5899[33]
  i5898.environmentLightingMode = i5899[34]
  i5898.ambientProbe = new pc.SphericalHarmonicsL2(i5899[35])
  i5898.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5899[36])
  i5898.useReferenceAmbientProbe = !!i5899[37]
  request.r(i5899[38], i5899[39], 0, i5898, 'customReflection')
  request.r(i5899[40], i5899[41], 0, i5898, 'defaultReflection')
  i5898.defaultReflectionMode = i5899[42]
  i5898.defaultReflectionResolution = i5899[43]
  i5898.sunLightObjectId = i5899[44]
  i5898.pixelLightCount = i5899[45]
  i5898.defaultReflectionHDR = !!i5899[46]
  i5898.hasLightDataAsset = !!i5899[47]
  i5898.hasManualGenerate = !!i5899[48]
  return i5898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5905 = data
  request.r(i5905[0], i5905[1], 0, i5904, 'lightmapColor')
  request.r(i5905[2], i5905[3], 0, i5904, 'lightmapDirection')
  return i5904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5906 = root || new UnityEngine.LightProbes()
  var i5907 = data
  return i5906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5913 = data
  var i5915 = i5913[0]
  var i5914 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5915.length; i += 1) {
    i5914.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5915[i + 0]));
  }
  i5912.ShaderCompilationErrors = i5914
  i5912.name = i5913[1]
  i5912.guid = i5913[2]
  var i5917 = i5913[3]
  var i5916 = []
  for(var i = 0; i < i5917.length; i += 1) {
    i5916.push( i5917[i + 0] );
  }
  i5912.shaderDefinedKeywords = i5916
  var i5919 = i5913[4]
  var i5918 = []
  for(var i = 0; i < i5919.length; i += 1) {
    i5918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5919[i + 0]) );
  }
  i5912.passes = i5918
  var i5921 = i5913[5]
  var i5920 = []
  for(var i = 0; i < i5921.length; i += 1) {
    i5920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5921[i + 0]) );
  }
  i5912.usePasses = i5920
  var i5923 = i5913[6]
  var i5922 = []
  for(var i = 0; i < i5923.length; i += 1) {
    i5922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5923[i + 0]) );
  }
  i5912.defaultParameterValues = i5922
  request.r(i5913[7], i5913[8], 0, i5912, 'unityFallbackShader')
  i5912.readDepth = !!i5913[9]
  i5912.isCreatedByShaderGraph = !!i5913[10]
  i5912.compiled = !!i5913[11]
  return i5912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5927 = data
  i5926.shaderName = i5927[0]
  i5926.errorMessage = i5927[1]
  return i5926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5930 = root || new pc.UnityShaderPass()
  var i5931 = data
  i5930.id = i5931[0]
  i5930.subShaderIndex = i5931[1]
  i5930.name = i5931[2]
  i5930.passType = i5931[3]
  i5930.grabPassTextureName = i5931[4]
  i5930.usePass = !!i5931[5]
  i5930.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5931[6], i5930.zTest)
  i5930.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5931[7], i5930.zWrite)
  i5930.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5931[8], i5930.culling)
  i5930.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5931[9], i5930.blending)
  i5930.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5931[10], i5930.alphaBlending)
  i5930.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5931[11], i5930.colorWriteMask)
  i5930.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5931[12], i5930.offsetUnits)
  i5930.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5931[13], i5930.offsetFactor)
  i5930.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5931[14], i5930.stencilRef)
  i5930.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5931[15], i5930.stencilReadMask)
  i5930.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5931[16], i5930.stencilWriteMask)
  i5930.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5931[17], i5930.stencilOp)
  i5930.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5931[18], i5930.stencilOpFront)
  i5930.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5931[19], i5930.stencilOpBack)
  var i5933 = i5931[20]
  var i5932 = []
  for(var i = 0; i < i5933.length; i += 1) {
    i5932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5933[i + 0]) );
  }
  i5930.tags = i5932
  var i5935 = i5931[21]
  var i5934 = []
  for(var i = 0; i < i5935.length; i += 1) {
    i5934.push( i5935[i + 0] );
  }
  i5930.passDefinedKeywords = i5934
  var i5937 = i5931[22]
  var i5936 = []
  for(var i = 0; i < i5937.length; i += 1) {
    i5936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5937[i + 0]) );
  }
  i5930.passDefinedKeywordGroups = i5936
  var i5939 = i5931[23]
  var i5938 = []
  for(var i = 0; i < i5939.length; i += 1) {
    i5938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5939[i + 0]) );
  }
  i5930.variants = i5938
  var i5941 = i5931[24]
  var i5940 = []
  for(var i = 0; i < i5941.length; i += 1) {
    i5940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5941[i + 0]) );
  }
  i5930.excludedVariants = i5940
  i5930.hasDepthReader = !!i5931[25]
  return i5930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5943 = data
  i5942.val = i5943[0]
  i5942.name = i5943[1]
  return i5942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5945 = data
  i5944.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5945[0], i5944.src)
  i5944.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5945[1], i5944.dst)
  i5944.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5945[2], i5944.op)
  return i5944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5947 = data
  i5946.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5947[0], i5946.pass)
  i5946.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5947[1], i5946.fail)
  i5946.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5947[2], i5946.zFail)
  i5946.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5947[3], i5946.comp)
  return i5946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5951 = data
  i5950.name = i5951[0]
  i5950.value = i5951[1]
  return i5950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5955 = data
  var i5957 = i5955[0]
  var i5956 = []
  for(var i = 0; i < i5957.length; i += 1) {
    i5956.push( i5957[i + 0] );
  }
  i5954.keywords = i5956
  i5954.hasDiscard = !!i5955[1]
  return i5954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5961 = data
  i5960.passId = i5961[0]
  i5960.subShaderIndex = i5961[1]
  var i5963 = i5961[2]
  var i5962 = []
  for(var i = 0; i < i5963.length; i += 1) {
    i5962.push( i5963[i + 0] );
  }
  i5960.keywords = i5962
  i5960.vertexProgram = i5961[3]
  i5960.fragmentProgram = i5961[4]
  i5960.exportedForWebGl2 = !!i5961[5]
  i5960.readDepth = !!i5961[6]
  return i5960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5967 = data
  request.r(i5967[0], i5967[1], 0, i5966, 'shader')
  i5966.pass = i5967[2]
  return i5966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5971 = data
  i5970.name = i5971[0]
  i5970.type = i5971[1]
  i5970.value = new pc.Vec4( i5971[2], i5971[3], i5971[4], i5971[5] )
  i5970.textureValue = i5971[6]
  i5970.shaderPropertyFlag = i5971[7]
  return i5970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5973 = data
  i5972.name = i5973[0]
  request.r(i5973[1], i5973[2], 0, i5972, 'texture')
  i5972.aabb = i5973[3]
  i5972.vertices = i5973[4]
  i5972.triangles = i5973[5]
  i5972.textureRect = UnityEngine.Rect.MinMaxRect(i5973[6], i5973[7], i5973[8], i5973[9])
  i5972.packedRect = UnityEngine.Rect.MinMaxRect(i5973[10], i5973[11], i5973[12], i5973[13])
  i5972.border = new pc.Vec4( i5973[14], i5973[15], i5973[16], i5973[17] )
  i5972.transparency = i5973[18]
  i5972.bounds = i5973[19]
  i5972.pixelsPerUnit = i5973[20]
  i5972.textureWidth = i5973[21]
  i5972.textureHeight = i5973[22]
  i5972.nativeSize = new pc.Vec2( i5973[23], i5973[24] )
  i5972.pivot = new pc.Vec2( i5973[25], i5973[26] )
  i5972.textureRectOffset = new pc.Vec2( i5973[27], i5973[28] )
  return i5972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5975 = data
  i5974.name = i5975[0]
  return i5974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5977 = data
  i5976.name = i5977[0]
  i5976.wrapMode = i5977[1]
  i5976.isLooping = !!i5977[2]
  i5976.length = i5977[3]
  var i5979 = i5977[4]
  var i5978 = []
  for(var i = 0; i < i5979.length; i += 1) {
    i5978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5979[i + 0]) );
  }
  i5976.curves = i5978
  var i5981 = i5977[5]
  var i5980 = []
  for(var i = 0; i < i5981.length; i += 1) {
    i5980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5981[i + 0]) );
  }
  i5976.events = i5980
  i5976.halfPrecision = !!i5977[6]
  i5976._frameRate = i5977[7]
  i5976.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5977[8], i5976.localBounds)
  i5976.hasMuscleCurves = !!i5977[9]
  var i5983 = i5977[10]
  var i5982 = []
  for(var i = 0; i < i5983.length; i += 1) {
    i5982.push( i5983[i + 0] );
  }
  i5976.clipMuscleConstant = i5982
  i5976.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5977[11], i5976.clipBindingConstant)
  return i5976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5987 = data
  i5986.path = i5987[0]
  i5986.hash = i5987[1]
  i5986.componentType = i5987[2]
  i5986.property = i5987[3]
  i5986.keys = i5987[4]
  var i5989 = i5987[5]
  var i5988 = []
  for(var i = 0; i < i5989.length; i += 1) {
    i5988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5989[i + 0]) );
  }
  i5986.objectReferenceKeys = i5988
  return i5986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5993 = data
  i5992.time = i5993[0]
  request.r(i5993[1], i5993[2], 0, i5992, 'value')
  return i5992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5997 = data
  i5996.functionName = i5997[0]
  i5996.floatParameter = i5997[1]
  i5996.intParameter = i5997[2]
  i5996.stringParameter = i5997[3]
  request.r(i5997[4], i5997[5], 0, i5996, 'objectReferenceParameter')
  i5996.time = i5997[6]
  return i5996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5999 = data
  i5998.center = new pc.Vec3( i5999[0], i5999[1], i5999[2] )
  i5998.extends = new pc.Vec3( i5999[3], i5999[4], i5999[5] )
  return i5998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6003 = data
  var i6005 = i6003[0]
  var i6004 = []
  for(var i = 0; i < i6005.length; i += 1) {
    i6004.push( i6005[i + 0] );
  }
  i6002.genericBindings = i6004
  var i6007 = i6003[1]
  var i6006 = []
  for(var i = 0; i < i6007.length; i += 1) {
    i6006.push( i6007[i + 0] );
  }
  i6002.pptrCurveMapping = i6006
  return i6002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i6008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i6009 = data
  i6008.name = i6009[0]
  i6008.ascent = i6009[1]
  i6008.originalLineHeight = i6009[2]
  i6008.fontSize = i6009[3]
  var i6011 = i6009[4]
  var i6010 = []
  for(var i = 0; i < i6011.length; i += 1) {
    i6010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i6011[i + 0]) );
  }
  i6008.characterInfo = i6010
  request.r(i6009[5], i6009[6], 0, i6008, 'texture')
  i6008.originalFontSize = i6009[7]
  return i6008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i6014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i6015 = data
  i6014.index = i6015[0]
  i6014.advance = i6015[1]
  i6014.bearing = i6015[2]
  i6014.glyphWidth = i6015[3]
  i6014.glyphHeight = i6015[4]
  i6014.minX = i6015[5]
  i6014.maxX = i6015[6]
  i6014.minY = i6015[7]
  i6014.maxY = i6015[8]
  i6014.uvBottomLeftX = i6015[9]
  i6014.uvBottomLeftY = i6015[10]
  i6014.uvBottomRightX = i6015[11]
  i6014.uvBottomRightY = i6015[12]
  i6014.uvTopLeftX = i6015[13]
  i6014.uvTopLeftY = i6015[14]
  i6014.uvTopRightX = i6015[15]
  i6014.uvTopRightY = i6015[16]
  return i6014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6017 = data
  i6016.name = i6017[0]
  var i6019 = i6017[1]
  var i6018 = []
  for(var i = 0; i < i6019.length; i += 1) {
    i6018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6019[i + 0]) );
  }
  i6016.layers = i6018
  var i6021 = i6017[2]
  var i6020 = []
  for(var i = 0; i < i6021.length; i += 1) {
    i6020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6021[i + 0]) );
  }
  i6016.parameters = i6020
  i6016.animationClips = i6017[3]
  i6016.avatarUnsupported = i6017[4]
  return i6016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6025 = data
  i6024.name = i6025[0]
  i6024.defaultWeight = i6025[1]
  i6024.blendingMode = i6025[2]
  i6024.avatarMask = i6025[3]
  i6024.syncedLayerIndex = i6025[4]
  i6024.syncedLayerAffectsTiming = !!i6025[5]
  i6024.syncedLayers = i6025[6]
  i6024.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6025[7], i6024.stateMachine)
  return i6024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6027 = data
  i6026.id = i6027[0]
  i6026.name = i6027[1]
  i6026.path = i6027[2]
  var i6029 = i6027[3]
  var i6028 = []
  for(var i = 0; i < i6029.length; i += 1) {
    i6028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6029[i + 0]) );
  }
  i6026.states = i6028
  var i6031 = i6027[4]
  var i6030 = []
  for(var i = 0; i < i6031.length; i += 1) {
    i6030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6031[i + 0]) );
  }
  i6026.machines = i6030
  var i6033 = i6027[5]
  var i6032 = []
  for(var i = 0; i < i6033.length; i += 1) {
    i6032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6033[i + 0]) );
  }
  i6026.entryStateTransitions = i6032
  var i6035 = i6027[6]
  var i6034 = []
  for(var i = 0; i < i6035.length; i += 1) {
    i6034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6035[i + 0]) );
  }
  i6026.exitStateTransitions = i6034
  var i6037 = i6027[7]
  var i6036 = []
  for(var i = 0; i < i6037.length; i += 1) {
    i6036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6037[i + 0]) );
  }
  i6026.anyStateTransitions = i6036
  i6026.defaultStateId = i6027[8]
  return i6026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6041 = data
  i6040.id = i6041[0]
  i6040.name = i6041[1]
  i6040.cycleOffset = i6041[2]
  i6040.cycleOffsetParameter = i6041[3]
  i6040.cycleOffsetParameterActive = !!i6041[4]
  i6040.mirror = !!i6041[5]
  i6040.mirrorParameter = i6041[6]
  i6040.mirrorParameterActive = !!i6041[7]
  i6040.motionId = i6041[8]
  i6040.nameHash = i6041[9]
  i6040.fullPathHash = i6041[10]
  i6040.speed = i6041[11]
  i6040.speedParameter = i6041[12]
  i6040.speedParameterActive = !!i6041[13]
  i6040.tag = i6041[14]
  i6040.tagHash = i6041[15]
  i6040.writeDefaultValues = !!i6041[16]
  var i6043 = i6041[17]
  var i6042 = []
  for(var i = 0; i < i6043.length; i += 2) {
  request.r(i6043[i + 0], i6043[i + 1], 2, i6042, '')
  }
  i6040.behaviours = i6042
  var i6045 = i6041[18]
  var i6044 = []
  for(var i = 0; i < i6045.length; i += 1) {
    i6044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6045[i + 0]) );
  }
  i6040.transitions = i6044
  return i6040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6051 = data
  i6050.fullPath = i6051[0]
  i6050.canTransitionToSelf = !!i6051[1]
  i6050.duration = i6051[2]
  i6050.exitTime = i6051[3]
  i6050.hasExitTime = !!i6051[4]
  i6050.hasFixedDuration = !!i6051[5]
  i6050.interruptionSource = i6051[6]
  i6050.offset = i6051[7]
  i6050.orderedInterruption = !!i6051[8]
  i6050.destinationStateId = i6051[9]
  i6050.isExit = !!i6051[10]
  i6050.mute = !!i6051[11]
  i6050.solo = !!i6051[12]
  var i6053 = i6051[13]
  var i6052 = []
  for(var i = 0; i < i6053.length; i += 1) {
    i6052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6053[i + 0]) );
  }
  i6050.conditions = i6052
  return i6050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6059 = data
  i6058.destinationStateId = i6059[0]
  i6058.isExit = !!i6059[1]
  i6058.mute = !!i6059[2]
  i6058.solo = !!i6059[3]
  var i6061 = i6059[4]
  var i6060 = []
  for(var i = 0; i < i6061.length; i += 1) {
    i6060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6061[i + 0]) );
  }
  i6058.conditions = i6060
  return i6058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6065 = data
  i6064.defaultBool = !!i6065[0]
  i6064.defaultFloat = i6065[1]
  i6064.defaultInt = i6065[2]
  i6064.name = i6065[3]
  i6064.nameHash = i6065[4]
  i6064.type = i6065[5]
  return i6064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6067 = data
  i6066.name = i6067[0]
  i6066.bytes64 = i6067[1]
  i6066.data = i6067[2]
  return i6066
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i6068 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i6069 = data
  i6068.hashCode = i6069[0]
  request.r(i6069[1], i6069[2], 0, i6068, 'material')
  i6068.materialHashCode = i6069[3]
  request.r(i6069[4], i6069[5], 0, i6068, 'atlas')
  i6068.normalStyle = i6069[6]
  i6068.normalSpacingOffset = i6069[7]
  i6068.boldStyle = i6069[8]
  i6068.boldSpacing = i6069[9]
  i6068.italicStyle = i6069[10]
  i6068.tabSize = i6069[11]
  i6068.m_Version = i6069[12]
  i6068.m_SourceFontFileGUID = i6069[13]
  request.r(i6069[14], i6069[15], 0, i6068, 'm_SourceFontFile_EditorRef')
  request.r(i6069[16], i6069[17], 0, i6068, 'm_SourceFontFile')
  i6068.m_AtlasPopulationMode = i6069[18]
  i6068.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6069[19], i6068.m_FaceInfo)
  var i6071 = i6069[20]
  var i6070 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i6071.length; i += 1) {
    i6070.add(request.d('UnityEngine.TextCore.Glyph', i6071[i + 0]));
  }
  i6068.m_GlyphTable = i6070
  var i6073 = i6069[21]
  var i6072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i6073.length; i += 1) {
    i6072.add(request.d('TMPro.TMP_Character', i6073[i + 0]));
  }
  i6068.m_CharacterTable = i6072
  var i6075 = i6069[22]
  var i6074 = []
  for(var i = 0; i < i6075.length; i += 2) {
  request.r(i6075[i + 0], i6075[i + 1], 2, i6074, '')
  }
  i6068.m_AtlasTextures = i6074
  i6068.m_AtlasTextureIndex = i6069[23]
  i6068.m_IsMultiAtlasTexturesEnabled = !!i6069[24]
  i6068.m_ClearDynamicDataOnBuild = !!i6069[25]
  var i6077 = i6069[26]
  var i6076 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6077.length; i += 1) {
    i6076.add(request.d('UnityEngine.TextCore.GlyphRect', i6077[i + 0]));
  }
  i6068.m_UsedGlyphRects = i6076
  var i6079 = i6069[27]
  var i6078 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6079.length; i += 1) {
    i6078.add(request.d('UnityEngine.TextCore.GlyphRect', i6079[i + 0]));
  }
  i6068.m_FreeGlyphRects = i6078
  i6068.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i6069[28], i6068.m_fontInfo)
  i6068.m_AtlasWidth = i6069[29]
  i6068.m_AtlasHeight = i6069[30]
  i6068.m_AtlasPadding = i6069[31]
  i6068.m_AtlasRenderMode = i6069[32]
  var i6081 = i6069[33]
  var i6080 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i6081.length; i += 1) {
    i6080.add(request.d('TMPro.TMP_Glyph', i6081[i + 0]));
  }
  i6068.m_glyphInfoList = i6080
  i6068.m_KerningTable = request.d('TMPro.KerningTable', i6069[34], i6068.m_KerningTable)
  i6068.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i6069[35], i6068.m_FontFeatureTable)
  var i6083 = i6069[36]
  var i6082 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6083.length; i += 2) {
  request.r(i6083[i + 0], i6083[i + 1], 1, i6082, '')
  }
  i6068.fallbackFontAssets = i6082
  var i6085 = i6069[37]
  var i6084 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6085.length; i += 2) {
  request.r(i6085[i + 0], i6085[i + 1], 1, i6084, '')
  }
  i6068.m_FallbackFontAssetTable = i6084
  i6068.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i6069[38], i6068.m_CreationSettings)
  var i6087 = i6069[39]
  var i6086 = []
  for(var i = 0; i < i6087.length; i += 1) {
    i6086.push( request.d('TMPro.TMP_FontWeightPair', i6087[i + 0]) );
  }
  i6068.m_FontWeightTable = i6086
  var i6089 = i6069[40]
  var i6088 = []
  for(var i = 0; i < i6089.length; i += 1) {
    i6088.push( request.d('TMPro.TMP_FontWeightPair', i6089[i + 0]) );
  }
  i6068.fontWeights = i6088
  return i6068
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i6090 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i6091 = data
  i6090.m_FaceIndex = i6091[0]
  i6090.m_FamilyName = i6091[1]
  i6090.m_StyleName = i6091[2]
  i6090.m_PointSize = i6091[3]
  i6090.m_Scale = i6091[4]
  i6090.m_UnitsPerEM = i6091[5]
  i6090.m_LineHeight = i6091[6]
  i6090.m_AscentLine = i6091[7]
  i6090.m_CapLine = i6091[8]
  i6090.m_MeanLine = i6091[9]
  i6090.m_Baseline = i6091[10]
  i6090.m_DescentLine = i6091[11]
  i6090.m_SuperscriptOffset = i6091[12]
  i6090.m_SuperscriptSize = i6091[13]
  i6090.m_SubscriptOffset = i6091[14]
  i6090.m_SubscriptSize = i6091[15]
  i6090.m_UnderlineOffset = i6091[16]
  i6090.m_UnderlineThickness = i6091[17]
  i6090.m_StrikethroughOffset = i6091[18]
  i6090.m_StrikethroughThickness = i6091[19]
  i6090.m_TabWidth = i6091[20]
  return i6090
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i6094 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i6095 = data
  i6094.m_Index = i6095[0]
  i6094.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6095[1], i6094.m_Metrics)
  i6094.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6095[2], i6094.m_GlyphRect)
  i6094.m_Scale = i6095[3]
  i6094.m_AtlasIndex = i6095[4]
  i6094.m_ClassDefinitionType = i6095[5]
  return i6094
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6096 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6097 = data
  i6096.m_Width = i6097[0]
  i6096.m_Height = i6097[1]
  i6096.m_HorizontalBearingX = i6097[2]
  i6096.m_HorizontalBearingY = i6097[3]
  i6096.m_HorizontalAdvance = i6097[4]
  return i6096
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6098 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6099 = data
  i6098.m_X = i6099[0]
  i6098.m_Y = i6099[1]
  i6098.m_Width = i6099[2]
  i6098.m_Height = i6099[3]
  return i6098
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i6102 = root || request.c( 'TMPro.TMP_Character' )
  var i6103 = data
  i6102.m_ElementType = i6103[0]
  i6102.m_Unicode = i6103[1]
  i6102.m_GlyphIndex = i6103[2]
  i6102.m_Scale = i6103[3]
  return i6102
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i6108 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i6109 = data
  i6108.Name = i6109[0]
  i6108.PointSize = i6109[1]
  i6108.Scale = i6109[2]
  i6108.CharacterCount = i6109[3]
  i6108.LineHeight = i6109[4]
  i6108.Baseline = i6109[5]
  i6108.Ascender = i6109[6]
  i6108.CapHeight = i6109[7]
  i6108.Descender = i6109[8]
  i6108.CenterLine = i6109[9]
  i6108.SuperscriptOffset = i6109[10]
  i6108.SubscriptOffset = i6109[11]
  i6108.SubSize = i6109[12]
  i6108.Underline = i6109[13]
  i6108.UnderlineThickness = i6109[14]
  i6108.strikethrough = i6109[15]
  i6108.strikethroughThickness = i6109[16]
  i6108.TabWidth = i6109[17]
  i6108.Padding = i6109[18]
  i6108.AtlasWidth = i6109[19]
  i6108.AtlasHeight = i6109[20]
  return i6108
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i6112 = root || request.c( 'TMPro.TMP_Glyph' )
  var i6113 = data
  i6112.id = i6113[0]
  i6112.x = i6113[1]
  i6112.y = i6113[2]
  i6112.width = i6113[3]
  i6112.height = i6113[4]
  i6112.xOffset = i6113[5]
  i6112.yOffset = i6113[6]
  i6112.xAdvance = i6113[7]
  i6112.scale = i6113[8]
  return i6112
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i6114 = root || request.c( 'TMPro.KerningTable' )
  var i6115 = data
  var i6117 = i6115[0]
  var i6116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i6117.length; i += 1) {
    i6116.add(request.d('TMPro.KerningPair', i6117[i + 0]));
  }
  i6114.kerningPairs = i6116
  return i6114
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i6120 = root || request.c( 'TMPro.KerningPair' )
  var i6121 = data
  i6120.xOffset = i6121[0]
  i6120.m_FirstGlyph = i6121[1]
  i6120.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6121[2], i6120.m_FirstGlyphAdjustments)
  i6120.m_SecondGlyph = i6121[3]
  i6120.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6121[4], i6120.m_SecondGlyphAdjustments)
  i6120.m_IgnoreSpacingAdjustments = !!i6121[5]
  return i6120
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i6122 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i6123 = data
  var i6125 = i6123[0]
  var i6124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i6125.length; i += 1) {
    i6124.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i6125[i + 0]));
  }
  i6122.m_GlyphPairAdjustmentRecords = i6124
  return i6122
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i6128 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i6129 = data
  i6128.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6129[0], i6128.m_FirstAdjustmentRecord)
  i6128.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6129[1], i6128.m_SecondAdjustmentRecord)
  i6128.m_FeatureLookupFlags = i6129[2]
  return i6128
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i6132 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i6133 = data
  i6132.sourceFontFileName = i6133[0]
  i6132.sourceFontFileGUID = i6133[1]
  i6132.pointSizeSamplingMode = i6133[2]
  i6132.pointSize = i6133[3]
  i6132.padding = i6133[4]
  i6132.packingMode = i6133[5]
  i6132.atlasWidth = i6133[6]
  i6132.atlasHeight = i6133[7]
  i6132.characterSetSelectionMode = i6133[8]
  i6132.characterSequence = i6133[9]
  i6132.referencedFontAssetGUID = i6133[10]
  i6132.referencedTextAssetGUID = i6133[11]
  i6132.fontStyle = i6133[12]
  i6132.fontStyleModifier = i6133[13]
  i6132.renderMode = i6133[14]
  i6132.includeFontFeatures = !!i6133[15]
  return i6132
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i6136 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i6137 = data
  request.r(i6137[0], i6137[1], 0, i6136, 'regularTypeface')
  request.r(i6137[2], i6137[3], 0, i6136, 'italicTypeface')
  return i6136
}

Deserializers["ItemData"] = function (request, data, root) {
  var i6138 = root || request.c( 'ItemData' )
  var i6139 = data
  i6138.itemName = i6139[0]
  request.r(i6139[1], i6139[2], 0, i6138, 'itemIcon')
  i6138.ItemCount = i6139[3]
  request.r(i6139[4], i6139[5], 0, i6138, 'collectItemSprite')
  i6138.color = i6139[6]
  request.r(i6139[7], i6139[8], 0, i6138, 'DecorationSprite')
  return i6138
}

Deserializers["TileData"] = function (request, data, root) {
  var i6140 = root || request.c( 'TileData' )
  var i6141 = data
  i6140.tileName = i6141[0]
  request.r(i6141[1], i6141[2], 0, i6140, 'tileSprite')
  i6140.isPowerup = !!i6141[3]
  i6140.isBreakable = !!i6141[4]
  i6140.isSwappable = !!i6141[5]
  i6140.isSpecialBreakable = !!i6141[6]
  return i6140
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i6142 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i6143 = data
  var i6145 = i6143[0]
  var i6144 = []
  for(var i = 0; i < i6145.length; i += 2) {
  request.r(i6145[i + 0], i6145[i + 1], 2, i6144, '')
  }
  i6142.atlasAssets = i6144
  i6142.scale = i6143[1]
  request.r(i6143[2], i6143[3], 0, i6142, 'skeletonJSON')
  i6142.isUpgradingBlendModeMaterials = !!i6143[4]
  i6142.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i6143[5], i6142.blendModeMaterials)
  var i6147 = i6143[6]
  var i6146 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i6147.length; i += 2) {
  request.r(i6147[i + 0], i6147[i + 1], 1, i6146, '')
  }
  i6142.skeletonDataModifiers = i6146
  var i6149 = i6143[7]
  var i6148 = []
  for(var i = 0; i < i6149.length; i += 1) {
    i6148.push( i6149[i + 0] );
  }
  i6142.fromAnimation = i6148
  var i6151 = i6143[8]
  var i6150 = []
  for(var i = 0; i < i6151.length; i += 1) {
    i6150.push( i6151[i + 0] );
  }
  i6142.toAnimation = i6150
  i6142.duration = i6143[9]
  i6142.defaultMix = i6143[10]
  request.r(i6143[11], i6143[12], 0, i6142, 'controller')
  return i6142
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i6154 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i6155 = data
  i6154.applyAdditiveMaterial = !!i6155[0]
  var i6157 = i6155[1]
  var i6156 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6157.length; i += 1) {
    i6156.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6157[i + 0]));
  }
  i6154.additiveMaterials = i6156
  var i6159 = i6155[2]
  var i6158 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6159.length; i += 1) {
    i6158.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6159[i + 0]));
  }
  i6154.multiplyMaterials = i6158
  var i6161 = i6155[3]
  var i6160 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i6161.length; i += 1) {
    i6160.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i6161[i + 0]));
  }
  i6154.screenMaterials = i6160
  i6154.requiresBlendModeMaterials = !!i6155[4]
  return i6154
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i6164 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i6165 = data
  i6164.pageName = i6165[0]
  request.r(i6165[1], i6165[2], 0, i6164, 'material')
  return i6164
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i6168 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i6169 = data
  request.r(i6169[0], i6169[1], 0, i6168, 'atlasFile')
  var i6171 = i6169[2]
  var i6170 = []
  for(var i = 0; i < i6171.length; i += 2) {
  request.r(i6171[i + 0], i6171[i + 1], 2, i6170, '')
  }
  i6168.materials = i6170
  i6168.textureLoadingMode = i6169[3]
  request.r(i6169[4], i6169[5], 0, i6168, 'onDemandTextureLoader')
  return i6168
}

Deserializers["DynamitePowerup"] = function (request, data, root) {
  var i6172 = root || request.c( 'DynamitePowerup' )
  var i6173 = data
  i6172.explosionRadius = i6173[0]
  i6172.tileName = i6173[1]
  request.r(i6173[2], i6173[3], 0, i6172, 'tileSprite')
  i6172.isPowerup = !!i6173[4]
  i6172.isBreakable = !!i6173[5]
  i6172.isSwappable = !!i6173[6]
  i6172.isSpecialBreakable = !!i6173[7]
  return i6172
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i6174 = root || request.c( 'AudioLibrary' )
  var i6175 = data
  var i6177 = i6175[0]
  var i6176 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i6177.length; i += 1) {
    i6176.add(request.d('AudioLibrary+ClipEntry', i6177[i + 0]));
  }
  i6174.clips = i6176
  return i6174
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i6180 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i6181 = data
  i6180.key = i6181[0]
  i6180.channel = i6181[1]
  request.r(i6181[2], i6181[3], 0, i6180, 'clip')
  i6180.volume = i6181[4]
  i6180.loop = !!i6181[5]
  return i6180
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i6182 = root || request.c( 'TMPro.TMP_Settings' )
  var i6183 = data
  i6182.m_enableWordWrapping = !!i6183[0]
  i6182.m_enableKerning = !!i6183[1]
  i6182.m_enableExtraPadding = !!i6183[2]
  i6182.m_enableTintAllSprites = !!i6183[3]
  i6182.m_enableParseEscapeCharacters = !!i6183[4]
  i6182.m_EnableRaycastTarget = !!i6183[5]
  i6182.m_GetFontFeaturesAtRuntime = !!i6183[6]
  i6182.m_missingGlyphCharacter = i6183[7]
  i6182.m_warningsDisabled = !!i6183[8]
  request.r(i6183[9], i6183[10], 0, i6182, 'm_defaultFontAsset')
  i6182.m_defaultFontAssetPath = i6183[11]
  i6182.m_defaultFontSize = i6183[12]
  i6182.m_defaultAutoSizeMinRatio = i6183[13]
  i6182.m_defaultAutoSizeMaxRatio = i6183[14]
  i6182.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i6183[15], i6183[16] )
  i6182.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i6183[17], i6183[18] )
  i6182.m_autoSizeTextContainer = !!i6183[19]
  i6182.m_IsTextObjectScaleStatic = !!i6183[20]
  var i6185 = i6183[21]
  var i6184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6185.length; i += 2) {
  request.r(i6185[i + 0], i6185[i + 1], 1, i6184, '')
  }
  i6182.m_fallbackFontAssets = i6184
  i6182.m_matchMaterialPreset = !!i6183[22]
  request.r(i6183[23], i6183[24], 0, i6182, 'm_defaultSpriteAsset')
  i6182.m_defaultSpriteAssetPath = i6183[25]
  i6182.m_enableEmojiSupport = !!i6183[26]
  i6182.m_MissingCharacterSpriteUnicode = i6183[27]
  i6182.m_defaultColorGradientPresetsPath = i6183[28]
  request.r(i6183[29], i6183[30], 0, i6182, 'm_defaultStyleSheet')
  i6182.m_StyleSheetsResourcePath = i6183[31]
  request.r(i6183[32], i6183[33], 0, i6182, 'm_leadingCharacters')
  request.r(i6183[34], i6183[35], 0, i6182, 'm_followingCharacters')
  i6182.m_UseModernHangulLineBreakingRules = !!i6183[36]
  return i6182
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i6186 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i6187 = data
  i6186.hashCode = i6187[0]
  request.r(i6187[1], i6187[2], 0, i6186, 'material')
  i6186.materialHashCode = i6187[3]
  request.r(i6187[4], i6187[5], 0, i6186, 'spriteSheet')
  var i6189 = i6187[6]
  var i6188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i6189.length; i += 1) {
    i6188.add(request.d('TMPro.TMP_Sprite', i6189[i + 0]));
  }
  i6186.spriteInfoList = i6188
  var i6191 = i6187[7]
  var i6190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i6191.length; i += 2) {
  request.r(i6191[i + 0], i6191[i + 1], 1, i6190, '')
  }
  i6186.fallbackSpriteAssets = i6190
  i6186.m_Version = i6187[8]
  i6186.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6187[9], i6186.m_FaceInfo)
  var i6193 = i6187[10]
  var i6192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i6193.length; i += 1) {
    i6192.add(request.d('TMPro.TMP_SpriteCharacter', i6193[i + 0]));
  }
  i6186.m_SpriteCharacterTable = i6192
  var i6195 = i6187[11]
  var i6194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i6195.length; i += 1) {
    i6194.add(request.d('TMPro.TMP_SpriteGlyph', i6195[i + 0]));
  }
  i6186.m_SpriteGlyphTable = i6194
  return i6186
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i6198 = root || request.c( 'TMPro.TMP_Sprite' )
  var i6199 = data
  i6198.name = i6199[0]
  i6198.hashCode = i6199[1]
  i6198.unicode = i6199[2]
  i6198.pivot = new pc.Vec2( i6199[3], i6199[4] )
  request.r(i6199[5], i6199[6], 0, i6198, 'sprite')
  i6198.id = i6199[7]
  i6198.x = i6199[8]
  i6198.y = i6199[9]
  i6198.width = i6199[10]
  i6198.height = i6199[11]
  i6198.xOffset = i6199[12]
  i6198.yOffset = i6199[13]
  i6198.xAdvance = i6199[14]
  i6198.scale = i6199[15]
  return i6198
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i6204 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i6205 = data
  i6204.m_Name = i6205[0]
  i6204.m_HashCode = i6205[1]
  i6204.m_ElementType = i6205[2]
  i6204.m_Unicode = i6205[3]
  i6204.m_GlyphIndex = i6205[4]
  i6204.m_Scale = i6205[5]
  return i6204
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i6208 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i6209 = data
  request.r(i6209[0], i6209[1], 0, i6208, 'sprite')
  i6208.m_Index = i6209[2]
  i6208.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6209[3], i6208.m_Metrics)
  i6208.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6209[4], i6208.m_GlyphRect)
  i6208.m_Scale = i6209[5]
  i6208.m_AtlasIndex = i6209[6]
  i6208.m_ClassDefinitionType = i6209[7]
  return i6208
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i6210 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i6211 = data
  var i6213 = i6211[0]
  var i6212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i6213.length; i += 1) {
    i6212.add(request.d('TMPro.TMP_Style', i6213[i + 0]));
  }
  i6210.m_StyleList = i6212
  return i6210
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i6216 = root || request.c( 'TMPro.TMP_Style' )
  var i6217 = data
  i6216.m_Name = i6217[0]
  i6216.m_HashCode = i6217[1]
  i6216.m_OpeningDefinition = i6217[2]
  i6216.m_ClosingDefinition = i6217[3]
  i6216.m_OpeningTagArray = i6217[4]
  i6216.m_ClosingTagArray = i6217[5]
  i6216.m_OpeningTagUnicodeArray = i6217[6]
  i6216.m_ClosingTagUnicodeArray = i6217[7]
  return i6216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6219 = data
  var i6221 = i6219[0]
  var i6220 = []
  for(var i = 0; i < i6221.length; i += 1) {
    i6220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6221[i + 0]) );
  }
  i6218.files = i6220
  i6218.componentToPrefabIds = i6219[1]
  return i6218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6225 = data
  i6224.path = i6225[0]
  request.r(i6225[1], i6225[2], 0, i6224, 'unityObject')
  return i6224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6227 = data
  var i6229 = i6227[0]
  var i6228 = []
  for(var i = 0; i < i6229.length; i += 1) {
    i6228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6229[i + 0]) );
  }
  i6226.scriptsExecutionOrder = i6228
  var i6231 = i6227[1]
  var i6230 = []
  for(var i = 0; i < i6231.length; i += 1) {
    i6230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6231[i + 0]) );
  }
  i6226.sortingLayers = i6230
  var i6233 = i6227[2]
  var i6232 = []
  for(var i = 0; i < i6233.length; i += 1) {
    i6232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6233[i + 0]) );
  }
  i6226.cullingLayers = i6232
  i6226.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6227[3], i6226.timeSettings)
  i6226.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6227[4], i6226.physicsSettings)
  i6226.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6227[5], i6226.physics2DSettings)
  i6226.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6227[6], i6226.qualitySettings)
  i6226.enableRealtimeShadows = !!i6227[7]
  i6226.enableAutoInstancing = !!i6227[8]
  i6226.enableDynamicBatching = !!i6227[9]
  i6226.lightmapEncodingQuality = i6227[10]
  i6226.desiredColorSpace = i6227[11]
  var i6235 = i6227[12]
  var i6234 = []
  for(var i = 0; i < i6235.length; i += 1) {
    i6234.push( i6235[i + 0] );
  }
  i6226.allTags = i6234
  return i6226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6239 = data
  i6238.name = i6239[0]
  i6238.value = i6239[1]
  return i6238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6243 = data
  i6242.id = i6243[0]
  i6242.name = i6243[1]
  i6242.value = i6243[2]
  return i6242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6247 = data
  i6246.id = i6247[0]
  i6246.name = i6247[1]
  return i6246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6249 = data
  i6248.fixedDeltaTime = i6249[0]
  i6248.maximumDeltaTime = i6249[1]
  i6248.timeScale = i6249[2]
  i6248.maximumParticleTimestep = i6249[3]
  return i6248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6251 = data
  i6250.gravity = new pc.Vec3( i6251[0], i6251[1], i6251[2] )
  i6250.defaultSolverIterations = i6251[3]
  i6250.bounceThreshold = i6251[4]
  i6250.autoSyncTransforms = !!i6251[5]
  i6250.autoSimulation = !!i6251[6]
  var i6253 = i6251[7]
  var i6252 = []
  for(var i = 0; i < i6253.length; i += 1) {
    i6252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6253[i + 0]) );
  }
  i6250.collisionMatrix = i6252
  return i6250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6257 = data
  i6256.enabled = !!i6257[0]
  i6256.layerId = i6257[1]
  i6256.otherLayerId = i6257[2]
  return i6256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6259 = data
  request.r(i6259[0], i6259[1], 0, i6258, 'material')
  i6258.gravity = new pc.Vec2( i6259[2], i6259[3] )
  i6258.positionIterations = i6259[4]
  i6258.velocityIterations = i6259[5]
  i6258.velocityThreshold = i6259[6]
  i6258.maxLinearCorrection = i6259[7]
  i6258.maxAngularCorrection = i6259[8]
  i6258.maxTranslationSpeed = i6259[9]
  i6258.maxRotationSpeed = i6259[10]
  i6258.baumgarteScale = i6259[11]
  i6258.baumgarteTOIScale = i6259[12]
  i6258.timeToSleep = i6259[13]
  i6258.linearSleepTolerance = i6259[14]
  i6258.angularSleepTolerance = i6259[15]
  i6258.defaultContactOffset = i6259[16]
  i6258.autoSimulation = !!i6259[17]
  i6258.queriesHitTriggers = !!i6259[18]
  i6258.queriesStartInColliders = !!i6259[19]
  i6258.callbacksOnDisable = !!i6259[20]
  i6258.reuseCollisionCallbacks = !!i6259[21]
  i6258.autoSyncTransforms = !!i6259[22]
  var i6261 = i6259[23]
  var i6260 = []
  for(var i = 0; i < i6261.length; i += 1) {
    i6260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6261[i + 0]) );
  }
  i6258.collisionMatrix = i6260
  return i6258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6265 = data
  i6264.enabled = !!i6265[0]
  i6264.layerId = i6265[1]
  i6264.otherLayerId = i6265[2]
  return i6264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6267 = data
  var i6269 = i6267[0]
  var i6268 = []
  for(var i = 0; i < i6269.length; i += 1) {
    i6268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6269[i + 0]) );
  }
  i6266.qualityLevels = i6268
  var i6271 = i6267[1]
  var i6270 = []
  for(var i = 0; i < i6271.length; i += 1) {
    i6270.push( i6271[i + 0] );
  }
  i6266.names = i6270
  i6266.shadows = i6267[2]
  i6266.anisotropicFiltering = i6267[3]
  i6266.antiAliasing = i6267[4]
  i6266.lodBias = i6267[5]
  i6266.shadowCascades = i6267[6]
  i6266.shadowDistance = i6267[7]
  i6266.shadowmaskMode = i6267[8]
  i6266.shadowProjection = i6267[9]
  i6266.shadowResolution = i6267[10]
  i6266.softParticles = !!i6267[11]
  i6266.softVegetation = !!i6267[12]
  i6266.activeColorSpace = i6267[13]
  i6266.desiredColorSpace = i6267[14]
  i6266.masterTextureLimit = i6267[15]
  i6266.maxQueuedFrames = i6267[16]
  i6266.particleRaycastBudget = i6267[17]
  i6266.pixelLightCount = i6267[18]
  i6266.realtimeReflectionProbes = !!i6267[19]
  i6266.shadowCascade2Split = i6267[20]
  i6266.shadowCascade4Split = new pc.Vec3( i6267[21], i6267[22], i6267[23] )
  i6266.streamingMipmapsActive = !!i6267[24]
  i6266.vSyncCount = i6267[25]
  i6266.asyncUploadBufferSize = i6267[26]
  i6266.asyncUploadTimeSlice = i6267[27]
  i6266.billboardsFaceCameraPosition = !!i6267[28]
  i6266.shadowNearPlaneOffset = i6267[29]
  i6266.streamingMipmapsMemoryBudget = i6267[30]
  i6266.maximumLODLevel = i6267[31]
  i6266.streamingMipmapsAddAllCameras = !!i6267[32]
  i6266.streamingMipmapsMaxLevelReduction = i6267[33]
  i6266.streamingMipmapsRenderersPerFrame = i6267[34]
  i6266.resolutionScalingFixedDPIFactor = i6267[35]
  i6266.streamingMipmapsMaxFileIORequests = i6267[36]
  i6266.currentQualityLevel = i6267[37]
  return i6266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6277 = data
  i6276.weight = i6277[0]
  i6276.vertices = i6277[1]
  i6276.normals = i6277[2]
  i6276.tangents = i6277[3]
  return i6276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6281 = data
  i6280.mode = i6281[0]
  i6280.parameter = i6281[1]
  i6280.threshold = i6281[2]
  return i6280
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i6282 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i6283 = data
  i6282.xPlacement = i6283[0]
  i6282.yPlacement = i6283[1]
  i6282.xAdvance = i6283[2]
  i6282.yAdvance = i6283[3]
  return i6282
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i6284 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i6285 = data
  i6284.m_GlyphIndex = i6285[0]
  i6284.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i6285[1], i6284.m_GlyphValueRecord)
  return i6284
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i6286 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i6287 = data
  i6286.m_XPlacement = i6287[0]
  i6286.m_YPlacement = i6287[1]
  i6286.m_XAdvance = i6287[2]
  i6286.m_YAdvance = i6287[3]
  return i6286
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[74],"75":[28],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[77],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[85],"93":[85],"94":[85],"95":[85],"96":[85],"97":[85],"98":[28],"99":[100],"101":[102],"103":[102],"30":[0],"20":[17],"104":[17],"105":[17],"106":[28],"107":[108],"109":[0],"110":[1,0],"111":[100],"44":[1,0],"112":[52,100],"113":[100],"114":[100,115],"116":[77],"117":[85],"118":[108],"119":[120],"121":[51],"122":[28],"123":[124],"125":[0],"126":[100,0],"5":[0,1],"127":[0],"128":[1,0],"129":[100],"130":[1,0],"131":[0],"132":[133],"134":[133],"135":[133],"136":[0],"137":[0],"32":[30],"4":[1,0],"138":[0],"31":[30],"139":[0],"47":[0],"45":[0],"140":[0],"141":[0],"142":[0],"143":[0],"48":[0],"144":[0],"145":[1,0],"146":[0],"147":[0],"148":[0],"149":[0],"150":[1,0],"151":[0],"152":[55],"153":[55],"56":[55],"154":[55],"155":[28],"156":[28]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","Item","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.Sprite","ItemData","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","TileCell","TileData","Tile","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","CartoonFX.CFXR_Effect","UnityEngine.Light","AnimatedTile","UnityEngine.GameObject","UnityEngine.TrailRenderer","StateEvents","PositionTracking","PNGSequencer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BasicFade","UnityEngine.CanvasGroup","UnityEngine.UI.Button","AppearAnimation","PlayerGuide","GameManager","RectAnimator","TileManager","DynamitePowerup","DynamiteEffect","SpecialTileManager","Spine.Unity.SkeletonGraphic","UnityEngine.UI.HorizontalLayoutGroup","UIMoveTo","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Mask","Spine.Unity.SkeletonDataAsset","AnimatedTileSpawner","UnityEngine.SpriteRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MergeHands","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AudioManager","AudioLibrary","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioClip","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CartoonFX.CFXR_EmissionBySurface","CartoonFX.CFXR_ParticleText","Kino.Bloom","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2023.1.0f1";

Deserializers.productName = "Piggy Kingdom - Renovation";

Deserializers.lunaInitializationTime = "09/29/2025 07:36:59";

Deserializers.lunaDaysRunning = "8.9";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Farm-Renovation";

Deserializers.lunaAppID = "32752";

Deserializers.projectId = "bab41f24a77b7a944b71277894eff5d3";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.8.2\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1936";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5479";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "38e6bceb-3bf1-4097-ac7e-dfb84dd04efd";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

