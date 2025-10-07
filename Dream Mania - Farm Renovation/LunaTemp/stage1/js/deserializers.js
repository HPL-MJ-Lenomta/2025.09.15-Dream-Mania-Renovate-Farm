var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i20520 = root || request.c( 'UnityEngine.JointSpring' )
  var i20521 = data
  i20520.spring = i20521[0]
  i20520.damper = i20521[1]
  i20520.targetPosition = i20521[2]
  return i20520
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i20522 = root || request.c( 'UnityEngine.JointMotor' )
  var i20523 = data
  i20522.m_TargetVelocity = i20523[0]
  i20522.m_Force = i20523[1]
  i20522.m_FreeSpin = i20523[2]
  return i20522
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i20524 = root || request.c( 'UnityEngine.JointLimits' )
  var i20525 = data
  i20524.m_Min = i20525[0]
  i20524.m_Max = i20525[1]
  i20524.m_Bounciness = i20525[2]
  i20524.m_BounceMinVelocity = i20525[3]
  i20524.m_ContactDistance = i20525[4]
  i20524.minBounce = i20525[5]
  i20524.maxBounce = i20525[6]
  return i20524
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i20526 = root || request.c( 'UnityEngine.JointDrive' )
  var i20527 = data
  i20526.m_PositionSpring = i20527[0]
  i20526.m_PositionDamper = i20527[1]
  i20526.m_MaximumForce = i20527[2]
  i20526.m_UseAcceleration = i20527[3]
  return i20526
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i20528 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i20529 = data
  i20528.m_Spring = i20529[0]
  i20528.m_Damper = i20529[1]
  return i20528
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i20530 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i20531 = data
  i20530.m_Limit = i20531[0]
  i20530.m_Bounciness = i20531[1]
  i20530.m_ContactDistance = i20531[2]
  return i20530
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i20532 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i20533 = data
  i20532.m_ExtremumSlip = i20533[0]
  i20532.m_ExtremumValue = i20533[1]
  i20532.m_AsymptoteSlip = i20533[2]
  i20532.m_AsymptoteValue = i20533[3]
  i20532.m_Stiffness = i20533[4]
  return i20532
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i20534 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i20535 = data
  i20534.m_LowerAngle = i20535[0]
  i20534.m_UpperAngle = i20535[1]
  return i20534
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i20536 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i20537 = data
  i20536.m_MotorSpeed = i20537[0]
  i20536.m_MaximumMotorTorque = i20537[1]
  return i20536
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i20538 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i20539 = data
  i20538.m_DampingRatio = i20539[0]
  i20538.m_Frequency = i20539[1]
  i20538.m_Angle = i20539[2]
  return i20538
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i20540 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i20541 = data
  i20540.m_LowerTranslation = i20541[0]
  i20540.m_UpperTranslation = i20541[1]
  return i20540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i20542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i20543 = data
  i20542.name = i20543[0]
  i20542.width = i20543[1]
  i20542.height = i20543[2]
  i20542.mipmapCount = i20543[3]
  i20542.anisoLevel = i20543[4]
  i20542.filterMode = i20543[5]
  i20542.hdr = !!i20543[6]
  i20542.format = i20543[7]
  i20542.wrapMode = i20543[8]
  i20542.alphaIsTransparency = !!i20543[9]
  i20542.alphaSource = i20543[10]
  i20542.graphicsFormat = i20543[11]
  i20542.sRGBTexture = !!i20543[12]
  i20542.desiredColorSpace = i20543[13]
  i20542.wrapU = i20543[14]
  i20542.wrapV = i20543[15]
  return i20542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i20544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i20545 = data
  i20544.pivot = new pc.Vec2( i20545[0], i20545[1] )
  i20544.anchorMin = new pc.Vec2( i20545[2], i20545[3] )
  i20544.anchorMax = new pc.Vec2( i20545[4], i20545[5] )
  i20544.sizeDelta = new pc.Vec2( i20545[6], i20545[7] )
  i20544.anchoredPosition3D = new pc.Vec3( i20545[8], i20545[9], i20545[10] )
  i20544.rotation = new pc.Quat(i20545[11], i20545[12], i20545[13], i20545[14])
  i20544.scale = new pc.Vec3( i20545[15], i20545[16], i20545[17] )
  return i20544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i20546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i20547 = data
  i20546.cullTransparentMesh = !!i20547[0]
  return i20546
}

Deserializers["Item"] = function (request, data, root) {
  var i20548 = root || request.c( 'Item' )
  var i20549 = data
  request.r(i20549[0], i20549[1], 0, i20548, 'itemImage')
  request.r(i20549[2], i20549[3], 0, i20548, 'collectItemImage')
  request.r(i20549[4], i20549[5], 0, i20548, 'itemCountText')
  i20548.ItemCount = i20549[6]
  request.r(i20549[7], i20549[8], 0, i20548, 'completeSprite')
  request.r(i20549[9], i20549[10], 0, i20548, 'data')
  request.r(i20549[11], i20549[12], 0, i20548, 'UIMovement')
  request.r(i20549[13], i20549[14], 0, i20548, 'FurnitureImage')
  i20548.portraitLocation = new pc.Vec2( i20549[15], i20549[16] )
  i20548.landscapeLocation = new pc.Vec2( i20549[17], i20549[18] )
  return i20548
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i20550 = root || request.c( 'UnityEngine.UI.Image' )
  var i20551 = data
  request.r(i20551[0], i20551[1], 0, i20550, 'm_Sprite')
  i20550.m_Type = i20551[2]
  i20550.m_PreserveAspect = !!i20551[3]
  i20550.m_FillCenter = !!i20551[4]
  i20550.m_FillMethod = i20551[5]
  i20550.m_FillAmount = i20551[6]
  i20550.m_FillClockwise = !!i20551[7]
  i20550.m_FillOrigin = i20551[8]
  i20550.m_UseSpriteMesh = !!i20551[9]
  i20550.m_PixelsPerUnitMultiplier = i20551[10]
  request.r(i20551[11], i20551[12], 0, i20550, 'm_Material')
  i20550.m_Maskable = !!i20551[13]
  i20550.m_Color = new pc.Color(i20551[14], i20551[15], i20551[16], i20551[17])
  i20550.m_RaycastTarget = !!i20551[18]
  i20550.m_RaycastPadding = new pc.Vec4( i20551[19], i20551[20], i20551[21], i20551[22] )
  return i20550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i20552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i20553 = data
  i20552.name = i20553[0]
  i20552.tagId = i20553[1]
  i20552.enabled = !!i20553[2]
  i20552.isStatic = !!i20553[3]
  i20552.layer = i20553[4]
  return i20552
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i20554 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i20555 = data
  i20554.m_hasFontAssetChanged = !!i20555[0]
  request.r(i20555[1], i20555[2], 0, i20554, 'm_baseMaterial')
  i20554.m_maskOffset = new pc.Vec4( i20555[3], i20555[4], i20555[5], i20555[6] )
  i20554.m_text = i20555[7]
  i20554.m_isRightToLeft = !!i20555[8]
  request.r(i20555[9], i20555[10], 0, i20554, 'm_fontAsset')
  request.r(i20555[11], i20555[12], 0, i20554, 'm_sharedMaterial')
  var i20557 = i20555[13]
  var i20556 = []
  for(var i = 0; i < i20557.length; i += 2) {
  request.r(i20557[i + 0], i20557[i + 1], 2, i20556, '')
  }
  i20554.m_fontSharedMaterials = i20556
  request.r(i20555[14], i20555[15], 0, i20554, 'm_fontMaterial')
  var i20559 = i20555[16]
  var i20558 = []
  for(var i = 0; i < i20559.length; i += 2) {
  request.r(i20559[i + 0], i20559[i + 1], 2, i20558, '')
  }
  i20554.m_fontMaterials = i20558
  i20554.m_fontColor32 = UnityEngine.Color32.ConstructColor(i20555[17], i20555[18], i20555[19], i20555[20])
  i20554.m_fontColor = new pc.Color(i20555[21], i20555[22], i20555[23], i20555[24])
  i20554.m_enableVertexGradient = !!i20555[25]
  i20554.m_colorMode = i20555[26]
  i20554.m_fontColorGradient = request.d('TMPro.VertexGradient', i20555[27], i20554.m_fontColorGradient)
  request.r(i20555[28], i20555[29], 0, i20554, 'm_fontColorGradientPreset')
  request.r(i20555[30], i20555[31], 0, i20554, 'm_spriteAsset')
  i20554.m_tintAllSprites = !!i20555[32]
  request.r(i20555[33], i20555[34], 0, i20554, 'm_StyleSheet')
  i20554.m_TextStyleHashCode = i20555[35]
  i20554.m_overrideHtmlColors = !!i20555[36]
  i20554.m_faceColor = UnityEngine.Color32.ConstructColor(i20555[37], i20555[38], i20555[39], i20555[40])
  i20554.m_fontSize = i20555[41]
  i20554.m_fontSizeBase = i20555[42]
  i20554.m_fontWeight = i20555[43]
  i20554.m_enableAutoSizing = !!i20555[44]
  i20554.m_fontSizeMin = i20555[45]
  i20554.m_fontSizeMax = i20555[46]
  i20554.m_fontStyle = i20555[47]
  i20554.m_HorizontalAlignment = i20555[48]
  i20554.m_VerticalAlignment = i20555[49]
  i20554.m_textAlignment = i20555[50]
  i20554.m_characterSpacing = i20555[51]
  i20554.m_wordSpacing = i20555[52]
  i20554.m_lineSpacing = i20555[53]
  i20554.m_lineSpacingMax = i20555[54]
  i20554.m_paragraphSpacing = i20555[55]
  i20554.m_charWidthMaxAdj = i20555[56]
  i20554.m_enableWordWrapping = !!i20555[57]
  i20554.m_wordWrappingRatios = i20555[58]
  i20554.m_overflowMode = i20555[59]
  request.r(i20555[60], i20555[61], 0, i20554, 'm_linkedTextComponent')
  request.r(i20555[62], i20555[63], 0, i20554, 'parentLinkedComponent')
  i20554.m_enableKerning = !!i20555[64]
  i20554.m_enableExtraPadding = !!i20555[65]
  i20554.checkPaddingRequired = !!i20555[66]
  i20554.m_isRichText = !!i20555[67]
  i20554.m_parseCtrlCharacters = !!i20555[68]
  i20554.m_isOrthographic = !!i20555[69]
  i20554.m_isCullingEnabled = !!i20555[70]
  i20554.m_horizontalMapping = i20555[71]
  i20554.m_verticalMapping = i20555[72]
  i20554.m_uvLineOffset = i20555[73]
  i20554.m_geometrySortingOrder = i20555[74]
  i20554.m_IsTextObjectScaleStatic = !!i20555[75]
  i20554.m_VertexBufferAutoSizeReduction = !!i20555[76]
  i20554.m_useMaxVisibleDescender = !!i20555[77]
  i20554.m_pageToDisplay = i20555[78]
  i20554.m_margin = new pc.Vec4( i20555[79], i20555[80], i20555[81], i20555[82] )
  i20554.m_isUsingLegacyAnimationComponent = !!i20555[83]
  i20554.m_isVolumetricText = !!i20555[84]
  request.r(i20555[85], i20555[86], 0, i20554, 'm_Material')
  i20554.m_Maskable = !!i20555[87]
  i20554.m_Color = new pc.Color(i20555[88], i20555[89], i20555[90], i20555[91])
  i20554.m_RaycastTarget = !!i20555[92]
  i20554.m_RaycastPadding = new pc.Vec4( i20555[93], i20555[94], i20555[95], i20555[96] )
  return i20554
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i20562 = root || request.c( 'TMPro.VertexGradient' )
  var i20563 = data
  i20562.topLeft = new pc.Color(i20563[0], i20563[1], i20563[2], i20563[3])
  i20562.topRight = new pc.Color(i20563[4], i20563[5], i20563[6], i20563[7])
  i20562.bottomLeft = new pc.Color(i20563[8], i20563[9], i20563[10], i20563[11])
  i20562.bottomRight = new pc.Color(i20563[12], i20563[13], i20563[14], i20563[15])
  return i20562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i20564 = root || new pc.UnityMaterial()
  var i20565 = data
  i20564.name = i20565[0]
  request.r(i20565[1], i20565[2], 0, i20564, 'shader')
  i20564.renderQueue = i20565[3]
  i20564.enableInstancing = !!i20565[4]
  var i20567 = i20565[5]
  var i20566 = []
  for(var i = 0; i < i20567.length; i += 1) {
    i20566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i20567[i + 0]) );
  }
  i20564.floatParameters = i20566
  var i20569 = i20565[6]
  var i20568 = []
  for(var i = 0; i < i20569.length; i += 1) {
    i20568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i20569[i + 0]) );
  }
  i20564.colorParameters = i20568
  var i20571 = i20565[7]
  var i20570 = []
  for(var i = 0; i < i20571.length; i += 1) {
    i20570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i20571[i + 0]) );
  }
  i20564.vectorParameters = i20570
  var i20573 = i20565[8]
  var i20572 = []
  for(var i = 0; i < i20573.length; i += 1) {
    i20572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i20573[i + 0]) );
  }
  i20564.textureParameters = i20572
  var i20575 = i20565[9]
  var i20574 = []
  for(var i = 0; i < i20575.length; i += 1) {
    i20574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i20575[i + 0]) );
  }
  i20564.materialFlags = i20574
  return i20564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i20578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i20579 = data
  i20578.name = i20579[0]
  i20578.value = i20579[1]
  return i20578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i20582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i20583 = data
  i20582.name = i20583[0]
  i20582.value = new pc.Color(i20583[1], i20583[2], i20583[3], i20583[4])
  return i20582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i20586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i20587 = data
  i20586.name = i20587[0]
  i20586.value = new pc.Vec4( i20587[1], i20587[2], i20587[3], i20587[4] )
  return i20586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i20590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i20591 = data
  i20590.name = i20591[0]
  request.r(i20591[1], i20591[2], 0, i20590, 'value')
  return i20590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i20594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i20595 = data
  i20594.name = i20595[0]
  i20594.enabled = !!i20595[1]
  return i20594
}

Deserializers["TileCell"] = function (request, data, root) {
  var i20596 = root || request.c( 'TileCell' )
  var i20597 = data
  i20596.coordinate = new pc.Vec2( i20597[0], i20597[1] )
  i20596.TileBreakEvent = request.d('UnityEngine.Events.UnityEvent', i20597[2], i20596.TileBreakEvent)
  request.r(i20597[3], i20597[4], 0, i20596, 'tileData')
  request.r(i20597[5], i20597[6], 0, i20596, 'tile')
  return i20596
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i20598 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i20599 = data
  i20598.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i20599[0], i20598.m_PersistentCalls)
  return i20598
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i20600 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i20601 = data
  var i20603 = i20601[0]
  var i20602 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i20603.length; i += 1) {
    i20602.add(request.d('UnityEngine.Events.PersistentCall', i20603[i + 0]));
  }
  i20600.m_Calls = i20602
  return i20600
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i20606 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i20607 = data
  request.r(i20607[0], i20607[1], 0, i20606, 'm_Target')
  i20606.m_TargetAssemblyTypeName = i20607[2]
  i20606.m_MethodName = i20607[3]
  i20606.m_Mode = i20607[4]
  i20606.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i20607[5], i20606.m_Arguments)
  i20606.m_CallState = i20607[6]
  return i20606
}

Deserializers["Tile"] = function (request, data, root) {
  var i20608 = root || request.c( 'Tile' )
  var i20609 = data
  request.r(i20609[0], i20609[1], 0, i20608, 'itemImage')
  request.r(i20609[2], i20609[3], 0, i20608, 'tileData')
  i20608.MovementMagnitude = i20609[4]
  i20608.MovementDuration = i20609[5]
  return i20608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i20610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i20611 = data
  i20610.position = new pc.Vec3( i20611[0], i20611[1], i20611[2] )
  i20610.scale = new pc.Vec3( i20611[3], i20611[4], i20611[5] )
  i20610.rotation = new pc.Quat(i20611[6], i20611[7], i20611[8], i20611[9])
  return i20610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i20612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i20613 = data
  i20612.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i20613[0], i20612.main)
  i20612.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i20613[1], i20612.colorBySpeed)
  i20612.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i20613[2], i20612.colorOverLifetime)
  i20612.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i20613[3], i20612.emission)
  i20612.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i20613[4], i20612.rotationBySpeed)
  i20612.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i20613[5], i20612.rotationOverLifetime)
  i20612.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i20613[6], i20612.shape)
  i20612.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i20613[7], i20612.sizeBySpeed)
  i20612.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i20613[8], i20612.sizeOverLifetime)
  i20612.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i20613[9], i20612.textureSheetAnimation)
  i20612.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i20613[10], i20612.velocityOverLifetime)
  i20612.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i20613[11], i20612.noise)
  i20612.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i20613[12], i20612.inheritVelocity)
  i20612.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i20613[13], i20612.forceOverLifetime)
  i20612.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i20613[14], i20612.limitVelocityOverLifetime)
  i20612.useAutoRandomSeed = !!i20613[15]
  i20612.randomSeed = i20613[16]
  return i20612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i20614 = root || new pc.ParticleSystemMain()
  var i20615 = data
  i20614.duration = i20615[0]
  i20614.loop = !!i20615[1]
  i20614.prewarm = !!i20615[2]
  i20614.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20615[3], i20614.startDelay)
  i20614.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20615[4], i20614.startLifetime)
  i20614.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20615[5], i20614.startSpeed)
  i20614.startSize3D = !!i20615[6]
  i20614.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20615[7], i20614.startSizeX)
  i20614.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20615[8], i20614.startSizeY)
  i20614.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20615[9], i20614.startSizeZ)
  i20614.startRotation3D = !!i20615[10]
  i20614.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20615[11], i20614.startRotationX)
  i20614.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20615[12], i20614.startRotationY)
  i20614.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20615[13], i20614.startRotationZ)
  i20614.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i20615[14], i20614.startColor)
  i20614.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20615[15], i20614.gravityModifier)
  i20614.simulationSpace = i20615[16]
  request.r(i20615[17], i20615[18], 0, i20614, 'customSimulationSpace')
  i20614.simulationSpeed = i20615[19]
  i20614.useUnscaledTime = !!i20615[20]
  i20614.scalingMode = i20615[21]
  i20614.playOnAwake = !!i20615[22]
  i20614.maxParticles = i20615[23]
  i20614.emitterVelocityMode = i20615[24]
  i20614.stopAction = i20615[25]
  return i20614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i20616 = root || new pc.MinMaxCurve()
  var i20617 = data
  i20616.mode = i20617[0]
  i20616.curveMin = new pc.AnimationCurve( { keys_flow: i20617[1] } )
  i20616.curveMax = new pc.AnimationCurve( { keys_flow: i20617[2] } )
  i20616.curveMultiplier = i20617[3]
  i20616.constantMin = i20617[4]
  i20616.constantMax = i20617[5]
  return i20616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i20618 = root || new pc.MinMaxGradient()
  var i20619 = data
  i20618.mode = i20619[0]
  i20618.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i20619[1], i20618.gradientMin)
  i20618.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i20619[2], i20618.gradientMax)
  i20618.colorMin = new pc.Color(i20619[3], i20619[4], i20619[5], i20619[6])
  i20618.colorMax = new pc.Color(i20619[7], i20619[8], i20619[9], i20619[10])
  return i20618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i20620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i20621 = data
  i20620.mode = i20621[0]
  var i20623 = i20621[1]
  var i20622 = []
  for(var i = 0; i < i20623.length; i += 1) {
    i20622.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i20623[i + 0]) );
  }
  i20620.colorKeys = i20622
  var i20625 = i20621[2]
  var i20624 = []
  for(var i = 0; i < i20625.length; i += 1) {
    i20624.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i20625[i + 0]) );
  }
  i20620.alphaKeys = i20624
  return i20620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i20626 = root || new pc.ParticleSystemColorBySpeed()
  var i20627 = data
  i20626.enabled = !!i20627[0]
  i20626.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i20627[1], i20626.color)
  i20626.range = new pc.Vec2( i20627[2], i20627[3] )
  return i20626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i20630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i20631 = data
  i20630.color = new pc.Color(i20631[0], i20631[1], i20631[2], i20631[3])
  i20630.time = i20631[4]
  return i20630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i20634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i20635 = data
  i20634.alpha = i20635[0]
  i20634.time = i20635[1]
  return i20634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i20636 = root || new pc.ParticleSystemColorOverLifetime()
  var i20637 = data
  i20636.enabled = !!i20637[0]
  i20636.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i20637[1], i20636.color)
  return i20636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i20638 = root || new pc.ParticleSystemEmitter()
  var i20639 = data
  i20638.enabled = !!i20639[0]
  i20638.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20639[1], i20638.rateOverTime)
  i20638.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20639[2], i20638.rateOverDistance)
  var i20641 = i20639[3]
  var i20640 = []
  for(var i = 0; i < i20641.length; i += 1) {
    i20640.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i20641[i + 0]) );
  }
  i20638.bursts = i20640
  return i20638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i20644 = root || new pc.ParticleSystemBurst()
  var i20645 = data
  i20644.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20645[0], i20644.count)
  i20644.cycleCount = i20645[1]
  i20644.minCount = i20645[2]
  i20644.maxCount = i20645[3]
  i20644.repeatInterval = i20645[4]
  i20644.time = i20645[5]
  return i20644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i20646 = root || new pc.ParticleSystemRotationBySpeed()
  var i20647 = data
  i20646.enabled = !!i20647[0]
  i20646.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20647[1], i20646.x)
  i20646.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20647[2], i20646.y)
  i20646.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20647[3], i20646.z)
  i20646.separateAxes = !!i20647[4]
  i20646.range = new pc.Vec2( i20647[5], i20647[6] )
  return i20646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i20648 = root || new pc.ParticleSystemRotationOverLifetime()
  var i20649 = data
  i20648.enabled = !!i20649[0]
  i20648.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20649[1], i20648.x)
  i20648.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20649[2], i20648.y)
  i20648.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20649[3], i20648.z)
  i20648.separateAxes = !!i20649[4]
  return i20648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i20650 = root || new pc.ParticleSystemShape()
  var i20651 = data
  i20650.enabled = !!i20651[0]
  i20650.shapeType = i20651[1]
  i20650.randomDirectionAmount = i20651[2]
  i20650.sphericalDirectionAmount = i20651[3]
  i20650.randomPositionAmount = i20651[4]
  i20650.alignToDirection = !!i20651[5]
  i20650.radius = i20651[6]
  i20650.radiusMode = i20651[7]
  i20650.radiusSpread = i20651[8]
  i20650.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20651[9], i20650.radiusSpeed)
  i20650.radiusThickness = i20651[10]
  i20650.angle = i20651[11]
  i20650.length = i20651[12]
  i20650.boxThickness = new pc.Vec3( i20651[13], i20651[14], i20651[15] )
  i20650.meshShapeType = i20651[16]
  request.r(i20651[17], i20651[18], 0, i20650, 'mesh')
  request.r(i20651[19], i20651[20], 0, i20650, 'meshRenderer')
  request.r(i20651[21], i20651[22], 0, i20650, 'skinnedMeshRenderer')
  i20650.useMeshMaterialIndex = !!i20651[23]
  i20650.meshMaterialIndex = i20651[24]
  i20650.useMeshColors = !!i20651[25]
  i20650.normalOffset = i20651[26]
  i20650.arc = i20651[27]
  i20650.arcMode = i20651[28]
  i20650.arcSpread = i20651[29]
  i20650.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20651[30], i20650.arcSpeed)
  i20650.donutRadius = i20651[31]
  i20650.position = new pc.Vec3( i20651[32], i20651[33], i20651[34] )
  i20650.rotation = new pc.Vec3( i20651[35], i20651[36], i20651[37] )
  i20650.scale = new pc.Vec3( i20651[38], i20651[39], i20651[40] )
  return i20650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i20652 = root || new pc.ParticleSystemSizeBySpeed()
  var i20653 = data
  i20652.enabled = !!i20653[0]
  i20652.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20653[1], i20652.x)
  i20652.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20653[2], i20652.y)
  i20652.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20653[3], i20652.z)
  i20652.separateAxes = !!i20653[4]
  i20652.range = new pc.Vec2( i20653[5], i20653[6] )
  return i20652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i20654 = root || new pc.ParticleSystemSizeOverLifetime()
  var i20655 = data
  i20654.enabled = !!i20655[0]
  i20654.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20655[1], i20654.x)
  i20654.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20655[2], i20654.y)
  i20654.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20655[3], i20654.z)
  i20654.separateAxes = !!i20655[4]
  return i20654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i20656 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i20657 = data
  i20656.enabled = !!i20657[0]
  i20656.mode = i20657[1]
  i20656.animation = i20657[2]
  i20656.numTilesX = i20657[3]
  i20656.numTilesY = i20657[4]
  i20656.useRandomRow = !!i20657[5]
  i20656.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20657[6], i20656.frameOverTime)
  i20656.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20657[7], i20656.startFrame)
  i20656.cycleCount = i20657[8]
  i20656.rowIndex = i20657[9]
  i20656.flipU = i20657[10]
  i20656.flipV = i20657[11]
  i20656.spriteCount = i20657[12]
  var i20659 = i20657[13]
  var i20658 = []
  for(var i = 0; i < i20659.length; i += 2) {
  request.r(i20659[i + 0], i20659[i + 1], 2, i20658, '')
  }
  i20656.sprites = i20658
  return i20656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i20662 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i20663 = data
  i20662.enabled = !!i20663[0]
  i20662.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20663[1], i20662.x)
  i20662.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20663[2], i20662.y)
  i20662.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20663[3], i20662.z)
  i20662.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20663[4], i20662.radial)
  i20662.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20663[5], i20662.speedModifier)
  i20662.space = i20663[6]
  i20662.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20663[7], i20662.orbitalX)
  i20662.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20663[8], i20662.orbitalY)
  i20662.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20663[9], i20662.orbitalZ)
  i20662.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20663[10], i20662.orbitalOffsetX)
  i20662.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20663[11], i20662.orbitalOffsetY)
  i20662.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20663[12], i20662.orbitalOffsetZ)
  return i20662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i20664 = root || new pc.ParticleSystemNoise()
  var i20665 = data
  i20664.enabled = !!i20665[0]
  i20664.separateAxes = !!i20665[1]
  i20664.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20665[2], i20664.strengthX)
  i20664.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20665[3], i20664.strengthY)
  i20664.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20665[4], i20664.strengthZ)
  i20664.frequency = i20665[5]
  i20664.damping = !!i20665[6]
  i20664.octaveCount = i20665[7]
  i20664.octaveMultiplier = i20665[8]
  i20664.octaveScale = i20665[9]
  i20664.quality = i20665[10]
  i20664.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20665[11], i20664.scrollSpeed)
  i20664.scrollSpeedMultiplier = i20665[12]
  i20664.remapEnabled = !!i20665[13]
  i20664.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20665[14], i20664.remapX)
  i20664.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20665[15], i20664.remapY)
  i20664.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20665[16], i20664.remapZ)
  i20664.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20665[17], i20664.positionAmount)
  i20664.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20665[18], i20664.rotationAmount)
  i20664.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20665[19], i20664.sizeAmount)
  return i20664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i20666 = root || new pc.ParticleSystemInheritVelocity()
  var i20667 = data
  i20666.enabled = !!i20667[0]
  i20666.mode = i20667[1]
  i20666.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20667[2], i20666.curve)
  return i20666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i20668 = root || new pc.ParticleSystemForceOverLifetime()
  var i20669 = data
  i20668.enabled = !!i20669[0]
  i20668.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20669[1], i20668.x)
  i20668.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20669[2], i20668.y)
  i20668.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20669[3], i20668.z)
  i20668.space = i20669[4]
  i20668.randomized = !!i20669[5]
  return i20668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i20670 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i20671 = data
  i20670.enabled = !!i20671[0]
  i20670.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20671[1], i20670.limit)
  i20670.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20671[2], i20670.limitX)
  i20670.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20671[3], i20670.limitY)
  i20670.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20671[4], i20670.limitZ)
  i20670.dampen = i20671[5]
  i20670.separateAxes = !!i20671[6]
  i20670.space = i20671[7]
  i20670.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i20671[8], i20670.drag)
  i20670.multiplyDragByParticleSize = !!i20671[9]
  i20670.multiplyDragByParticleVelocity = !!i20671[10]
  return i20670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i20672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i20673 = data
  i20672.enabled = !!i20673[0]
  request.r(i20673[1], i20673[2], 0, i20672, 'sharedMaterial')
  var i20675 = i20673[3]
  var i20674 = []
  for(var i = 0; i < i20675.length; i += 2) {
  request.r(i20675[i + 0], i20675[i + 1], 2, i20674, '')
  }
  i20672.sharedMaterials = i20674
  i20672.receiveShadows = !!i20673[4]
  i20672.shadowCastingMode = i20673[5]
  i20672.sortingLayerID = i20673[6]
  i20672.sortingOrder = i20673[7]
  i20672.lightmapIndex = i20673[8]
  i20672.lightmapSceneIndex = i20673[9]
  i20672.lightmapScaleOffset = new pc.Vec4( i20673[10], i20673[11], i20673[12], i20673[13] )
  i20672.lightProbeUsage = i20673[14]
  i20672.reflectionProbeUsage = i20673[15]
  request.r(i20673[16], i20673[17], 0, i20672, 'mesh')
  i20672.meshCount = i20673[18]
  i20672.activeVertexStreamsCount = i20673[19]
  i20672.alignment = i20673[20]
  i20672.renderMode = i20673[21]
  i20672.sortMode = i20673[22]
  i20672.lengthScale = i20673[23]
  i20672.velocityScale = i20673[24]
  i20672.cameraVelocityScale = i20673[25]
  i20672.normalDirection = i20673[26]
  i20672.sortingFudge = i20673[27]
  i20672.minParticleSize = i20673[28]
  i20672.maxParticleSize = i20673[29]
  i20672.pivot = new pc.Vec3( i20673[30], i20673[31], i20673[32] )
  request.r(i20673[33], i20673[34], 0, i20672, 'trailMaterial')
  return i20672
}

Deserializers["CartoonFX.CFXR_Effect"] = function (request, data, root) {
  var i20676 = root || request.c( 'CartoonFX.CFXR_Effect' )
  var i20677 = data
  i20676.clearBehavior = i20677[0]
  i20676.cameraShake = request.d('CartoonFX.CFXR_Effect+CameraShake', i20677[1], i20676.cameraShake)
  var i20679 = i20677[2]
  var i20678 = []
  for(var i = 0; i < i20679.length; i += 1) {
    i20678.push( request.d('CartoonFX.CFXR_Effect+AnimatedLight', i20679[i + 0]) );
  }
  i20676.animatedLights = i20678
  request.r(i20677[3], i20677[4], 0, i20676, 'fadeOutReference')
  return i20676
}

Deserializers["CartoonFX.CFXR_Effect+CameraShake"] = function (request, data, root) {
  var i20680 = root || request.c( 'CartoonFX.CFXR_Effect+CameraShake' )
  var i20681 = data
  i20680.camEnabled = !!i20681[0]
  i20680.useMainCamera = !!i20681[1]
  var i20683 = i20681[2]
  var i20682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i20683.length; i += 2) {
  request.r(i20683[i + 0], i20683[i + 1], 1, i20682, '')
  }
  i20680.cameras = i20682
  i20680.delay = i20681[3]
  i20680.duration = i20681[4]
  i20680.shakeSpace = i20681[5]
  i20680.shakeStrength = new pc.Vec3( i20681[6], i20681[7], i20681[8] )
  i20680.shakeCurve = new pc.AnimationCurve( { keys_flow: i20681[9] } )
  i20680.shakesDelay = i20681[10]
  return i20680
}

Deserializers["CartoonFX.CFXR_Effect+AnimatedLight"] = function (request, data, root) {
  var i20688 = root || request.c( 'CartoonFX.CFXR_Effect+AnimatedLight' )
  var i20689 = data
  request.r(i20689[0], i20689[1], 0, i20688, 'light')
  i20688.loop = !!i20689[2]
  i20688.animateIntensity = !!i20689[3]
  i20688.intensityStart = i20689[4]
  i20688.intensityEnd = i20689[5]
  i20688.intensityDuration = i20689[6]
  i20688.intensityCurve = new pc.AnimationCurve( { keys_flow: i20689[7] } )
  i20688.perlinIntensity = !!i20689[8]
  i20688.perlinIntensitySpeed = i20689[9]
  i20688.fadeIn = !!i20689[10]
  i20688.fadeInDuration = i20689[11]
  i20688.fadeOut = !!i20689[12]
  i20688.fadeOutDuration = i20689[13]
  i20688.animateRange = !!i20689[14]
  i20688.rangeStart = i20689[15]
  i20688.rangeEnd = i20689[16]
  i20688.rangeDuration = i20689[17]
  i20688.rangeCurve = new pc.AnimationCurve( { keys_flow: i20689[18] } )
  i20688.perlinRange = !!i20689[19]
  i20688.perlinRangeSpeed = i20689[20]
  i20688.animateColor = !!i20689[21]
  i20688.colorGradient = i20689[22] ? new pc.ColorGradient(i20689[22][0], i20689[22][1], i20689[22][2]) : null
  i20688.colorDuration = i20689[23]
  i20688.colorCurve = new pc.AnimationCurve( { keys_flow: i20689[24] } )
  i20688.perlinColor = !!i20689[25]
  i20688.perlinColorSpeed = i20689[26]
  return i20688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i20690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i20691 = data
  i20690.enabled = !!i20691[0]
  i20690.type = i20691[1]
  i20690.color = new pc.Color(i20691[2], i20691[3], i20691[4], i20691[5])
  i20690.cullingMask = i20691[6]
  i20690.intensity = i20691[7]
  i20690.range = i20691[8]
  i20690.spotAngle = i20691[9]
  i20690.shadows = i20691[10]
  i20690.shadowNormalBias = i20691[11]
  i20690.shadowBias = i20691[12]
  i20690.shadowStrength = i20691[13]
  i20690.shadowResolution = i20691[14]
  i20690.lightmapBakeType = i20691[15]
  i20690.renderMode = i20691[16]
  request.r(i20691[17], i20691[18], 0, i20690, 'cookie')
  i20690.cookieSize = i20691[19]
  return i20690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i20692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i20693 = data
  i20692.name = i20693[0]
  i20692.halfPrecision = !!i20693[1]
  i20692.useUInt32IndexFormat = !!i20693[2]
  i20692.vertexCount = i20693[3]
  i20692.aabb = i20693[4]
  var i20695 = i20693[5]
  var i20694 = []
  for(var i = 0; i < i20695.length; i += 1) {
    i20694.push( !!i20695[i + 0] );
  }
  i20692.streams = i20694
  i20692.vertices = i20693[6]
  var i20697 = i20693[7]
  var i20696 = []
  for(var i = 0; i < i20697.length; i += 1) {
    i20696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i20697[i + 0]) );
  }
  i20692.subMeshes = i20696
  var i20699 = i20693[8]
  var i20698 = []
  for(var i = 0; i < i20699.length; i += 16) {
    i20698.push( new pc.Mat4().setData(i20699[i + 0], i20699[i + 1], i20699[i + 2], i20699[i + 3],  i20699[i + 4], i20699[i + 5], i20699[i + 6], i20699[i + 7],  i20699[i + 8], i20699[i + 9], i20699[i + 10], i20699[i + 11],  i20699[i + 12], i20699[i + 13], i20699[i + 14], i20699[i + 15]) );
  }
  i20692.bindposes = i20698
  var i20701 = i20693[9]
  var i20700 = []
  for(var i = 0; i < i20701.length; i += 1) {
    i20700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i20701[i + 0]) );
  }
  i20692.blendShapes = i20700
  return i20692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i20706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i20707 = data
  i20706.triangles = i20707[0]
  return i20706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i20712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i20713 = data
  i20712.name = i20713[0]
  var i20715 = i20713[1]
  var i20714 = []
  for(var i = 0; i < i20715.length; i += 1) {
    i20714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i20715[i + 0]) );
  }
  i20712.frames = i20714
  return i20712
}

Deserializers["AnimatedTile"] = function (request, data, root) {
  var i20716 = root || request.c( 'AnimatedTile' )
  var i20717 = data
  i20716.Duration = i20717[0]
  request.r(i20717[1], i20717[2], 0, i20716, 'tileData')
  var i20719 = i20717[3]
  var i20718 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i20719.length; i += 3) {
    i20718.add(new pc.Vec3( i20719[i + 0], i20719[i + 1], i20719[i + 2] ));
  }
  i20716.targetPos = i20718
  var i20721 = i20717[4]
  var i20720 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i20721.length; i += 3) {
    i20720.add(new pc.Vec3( i20721[i + 0], i20721[i + 1], i20721[i + 2] ));
  }
  i20716.targetPosPortrait = i20720
  var i20723 = i20717[5]
  var i20722 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i20723.length; i += 3) {
    i20722.add(new pc.Vec3( i20723[i + 0], i20723[i + 1], i20723[i + 2] ));
  }
  i20716.targetPosLandscape = i20722
  var i20725 = i20717[6]
  var i20724 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i20725.length; i += 1) {
    i20724.add(i20725[i + 0]);
  }
  i20716.targets = i20724
  request.r(i20717[7], i20717[8], 0, i20716, 'image')
  var i20727 = i20717[9]
  var i20726 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i20727.length; i += 2) {
  request.r(i20727[i + 0], i20727[i + 1], 1, i20726, '')
  }
  i20716.vfxParticles = i20726
  request.r(i20717[10], i20717[11], 0, i20716, 'trailVFXPrefab')
  request.r(i20717[12], i20717[13], 0, i20716, 'circleTrailVFXPrefab')
  request.r(i20717[14], i20717[15], 0, i20716, 'trailRenderer')
  return i20716
}

Deserializers["StateEvents"] = function (request, data, root) {
  var i20734 = root || request.c( 'StateEvents' )
  var i20735 = data
  i20734.OnEnableEvent = request.d('UnityEngine.Events.UnityEvent', i20735[0], i20734.OnEnableEvent)
  i20734.OnDisableEvent = request.d('UnityEngine.Events.UnityEvent', i20735[1], i20734.OnDisableEvent)
  i20734.OnStartEvent = request.d('UnityEngine.Events.UnityEvent', i20735[2], i20734.OnStartEvent)
  i20734.autoEnable = !!i20735[3]
  i20734.autoEnableDelay = i20735[4]
  i20734.autoDisableDelay = i20735[5]
  return i20734
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i20736 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i20737 = data
  request.r(i20737[0], i20737[1], 0, i20736, 'm_ObjectArgument')
  i20736.m_ObjectArgumentAssemblyTypeName = i20737[2]
  i20736.m_IntArgument = i20737[3]
  i20736.m_FloatArgument = i20737[4]
  i20736.m_StringArgument = i20737[5]
  i20736.m_BoolArgument = !!i20737[6]
  return i20736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i20738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i20739 = data
  i20738.enabled = !!i20739[0]
  request.r(i20739[1], i20739[2], 0, i20738, 'sharedMaterial')
  var i20741 = i20739[3]
  var i20740 = []
  for(var i = 0; i < i20741.length; i += 2) {
  request.r(i20741[i + 0], i20741[i + 1], 2, i20740, '')
  }
  i20738.sharedMaterials = i20740
  i20738.receiveShadows = !!i20739[4]
  i20738.shadowCastingMode = i20739[5]
  i20738.sortingLayerID = i20739[6]
  i20738.sortingOrder = i20739[7]
  i20738.lightmapIndex = i20739[8]
  i20738.lightmapSceneIndex = i20739[9]
  i20738.lightmapScaleOffset = new pc.Vec4( i20739[10], i20739[11], i20739[12], i20739[13] )
  i20738.lightProbeUsage = i20739[14]
  i20738.reflectionProbeUsage = i20739[15]
  var i20743 = i20739[16]
  var i20742 = []
  for(var i = 0; i < i20743.length; i += 3) {
    i20742.push( new pc.Vec3( i20743[i + 0], i20743[i + 1], i20743[i + 2] ) );
  }
  i20738.positions = i20742
  i20738.positionCount = i20739[17]
  i20738.time = i20739[18]
  i20738.startWidth = i20739[19]
  i20738.endWidth = i20739[20]
  i20738.widthMultiplier = i20739[21]
  i20738.autodestruct = !!i20739[22]
  i20738.emitting = !!i20739[23]
  i20738.numCornerVertices = i20739[24]
  i20738.numCapVertices = i20739[25]
  i20738.minVertexDistance = i20739[26]
  i20738.colorGradient = i20739[27] ? new pc.ColorGradient(i20739[27][0], i20739[27][1], i20739[27][2]) : null
  i20738.startColor = new pc.Color(i20739[28], i20739[29], i20739[30], i20739[31])
  i20738.endColor = new pc.Color(i20739[32], i20739[33], i20739[34], i20739[35])
  i20738.generateLightingData = !!i20739[36]
  i20738.textureMode = i20739[37]
  i20738.alignment = i20739[38]
  i20738.widthCurve = new pc.AnimationCurve( { keys_flow: i20739[39] } )
  return i20738
}

Deserializers["PositionTracking"] = function (request, data, root) {
  var i20746 = root || request.c( 'PositionTracking' )
  var i20747 = data
  return i20746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i20748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i20749 = data
  i20748.name = i20749[0]
  i20748.index = i20749[1]
  i20748.startup = !!i20749[2]
  return i20748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i20750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i20751 = data
  i20750.enabled = !!i20751[0]
  i20750.aspect = i20751[1]
  i20750.orthographic = !!i20751[2]
  i20750.orthographicSize = i20751[3]
  i20750.backgroundColor = new pc.Color(i20751[4], i20751[5], i20751[6], i20751[7])
  i20750.nearClipPlane = i20751[8]
  i20750.farClipPlane = i20751[9]
  i20750.fieldOfView = i20751[10]
  i20750.depth = i20751[11]
  i20750.clearFlags = i20751[12]
  i20750.cullingMask = i20751[13]
  i20750.rect = i20751[14]
  request.r(i20751[15], i20751[16], 0, i20750, 'targetTexture')
  i20750.usePhysicalProperties = !!i20751[17]
  i20750.focalLength = i20751[18]
  i20750.sensorSize = new pc.Vec2( i20751[19], i20751[20] )
  i20750.lensShift = new pc.Vec2( i20751[21], i20751[22] )
  i20750.gateFit = i20751[23]
  i20750.commandBufferCount = i20751[24]
  i20750.cameraType = i20751[25]
  return i20750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i20752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i20753 = data
  i20752.enabled = !!i20753[0]
  i20752.planeDistance = i20753[1]
  i20752.referencePixelsPerUnit = i20753[2]
  i20752.isFallbackOverlay = !!i20753[3]
  i20752.renderMode = i20753[4]
  i20752.renderOrder = i20753[5]
  i20752.sortingLayerName = i20753[6]
  i20752.sortingOrder = i20753[7]
  i20752.scaleFactor = i20753[8]
  request.r(i20753[9], i20753[10], 0, i20752, 'worldCamera')
  i20752.overrideSorting = !!i20753[11]
  i20752.pixelPerfect = !!i20753[12]
  i20752.targetDisplay = i20753[13]
  i20752.overridePixelPerfect = !!i20753[14]
  return i20752
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i20754 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i20755 = data
  i20754.m_UiScaleMode = i20755[0]
  i20754.m_ReferencePixelsPerUnit = i20755[1]
  i20754.m_ScaleFactor = i20755[2]
  i20754.m_ReferenceResolution = new pc.Vec2( i20755[3], i20755[4] )
  i20754.m_ScreenMatchMode = i20755[5]
  i20754.m_MatchWidthOrHeight = i20755[6]
  i20754.m_PhysicalUnit = i20755[7]
  i20754.m_FallbackScreenDPI = i20755[8]
  i20754.m_DefaultSpriteDPI = i20755[9]
  i20754.m_DynamicPixelsPerUnit = i20755[10]
  i20754.m_PresetInfoIsWorld = !!i20755[11]
  return i20754
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i20756 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i20757 = data
  i20756.m_IgnoreReversedGraphics = !!i20757[0]
  i20756.m_BlockingObjects = i20757[1]
  i20756.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i20757[2] )
  return i20756
}

Deserializers["BasicFade"] = function (request, data, root) {
  var i20758 = root || request.c( 'BasicFade' )
  var i20759 = data
  request.r(i20759[0], i20759[1], 0, i20758, 'canvasGroup')
  i20758.duration = i20759[2]
  return i20758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i20760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i20761 = data
  i20760.m_Alpha = i20761[0]
  i20760.m_Interactable = !!i20761[1]
  i20760.m_BlocksRaycasts = !!i20761[2]
  i20760.m_IgnoreParentGroups = !!i20761[3]
  i20760.enabled = !!i20761[4]
  return i20760
}

Deserializers["AppearAnimation"] = function (request, data, root) {
  var i20762 = root || request.c( 'AppearAnimation' )
  var i20763 = data
  i20762.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i20763[0], i20762.OnMovementComplete)
  i20762.fadeInDuration = i20763[1]
  i20762.fadeInDelay = i20763[2]
  i20762.fillDuration = i20763[3]
  i20762.fillDelay = i20763[4]
  i20762.targetFillAmount = i20763[5]
  i20762.initialFillAmount = i20763[6]
  return i20762
}

Deserializers["PlayerGuide"] = function (request, data, root) {
  var i20764 = root || request.c( 'PlayerGuide' )
  var i20765 = data
  var i20767 = i20765[0]
  var i20766 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i20767.length; i += 2) {
  request.r(i20767[i + 0], i20767[i + 1], 1, i20766, '')
  }
  i20764.prompts = i20766
  return i20764
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i20770 = root || request.c( 'UnityEngine.UI.Button' )
  var i20771 = data
  i20770.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i20771[0], i20770.m_OnClick)
  i20770.m_Navigation = request.d('UnityEngine.UI.Navigation', i20771[1], i20770.m_Navigation)
  i20770.m_Transition = i20771[2]
  i20770.m_Colors = request.d('UnityEngine.UI.ColorBlock', i20771[3], i20770.m_Colors)
  i20770.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i20771[4], i20770.m_SpriteState)
  i20770.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i20771[5], i20770.m_AnimationTriggers)
  i20770.m_Interactable = !!i20771[6]
  request.r(i20771[7], i20771[8], 0, i20770, 'm_TargetGraphic')
  return i20770
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i20772 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i20773 = data
  i20772.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i20773[0], i20772.m_PersistentCalls)
  return i20772
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i20774 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i20775 = data
  i20774.m_Mode = i20775[0]
  i20774.m_WrapAround = !!i20775[1]
  request.r(i20775[2], i20775[3], 0, i20774, 'm_SelectOnUp')
  request.r(i20775[4], i20775[5], 0, i20774, 'm_SelectOnDown')
  request.r(i20775[6], i20775[7], 0, i20774, 'm_SelectOnLeft')
  request.r(i20775[8], i20775[9], 0, i20774, 'm_SelectOnRight')
  return i20774
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i20776 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i20777 = data
  i20776.m_NormalColor = new pc.Color(i20777[0], i20777[1], i20777[2], i20777[3])
  i20776.m_HighlightedColor = new pc.Color(i20777[4], i20777[5], i20777[6], i20777[7])
  i20776.m_PressedColor = new pc.Color(i20777[8], i20777[9], i20777[10], i20777[11])
  i20776.m_SelectedColor = new pc.Color(i20777[12], i20777[13], i20777[14], i20777[15])
  i20776.m_DisabledColor = new pc.Color(i20777[16], i20777[17], i20777[18], i20777[19])
  i20776.m_ColorMultiplier = i20777[20]
  i20776.m_FadeDuration = i20777[21]
  return i20776
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i20778 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i20779 = data
  request.r(i20779[0], i20779[1], 0, i20778, 'm_HighlightedSprite')
  request.r(i20779[2], i20779[3], 0, i20778, 'm_PressedSprite')
  request.r(i20779[4], i20779[5], 0, i20778, 'm_SelectedSprite')
  request.r(i20779[6], i20779[7], 0, i20778, 'm_DisabledSprite')
  return i20778
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i20780 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i20781 = data
  i20780.m_NormalTrigger = i20781[0]
  i20780.m_HighlightedTrigger = i20781[1]
  i20780.m_PressedTrigger = i20781[2]
  i20780.m_SelectedTrigger = i20781[3]
  i20780.m_DisabledTrigger = i20781[4]
  return i20780
}

Deserializers["RectAnimator"] = function (request, data, root) {
  var i20782 = root || request.c( 'RectAnimator' )
  var i20783 = data
  request.r(i20783[0], i20783[1], 0, i20782, 'rectTransform')
  i20782.animateScale = !!i20783[2]
  i20782.isScaleLooping = !!i20783[3]
  i20782.scaleTo = i20783[4]
  i20782.scaleDuration = i20783[5]
  i20782.scaleEaseType = i20783[6]
  i20782.scaleStartDelay = i20783[7]
  i20782.animateMove = !!i20783[8]
  i20782.isMoveLooping = !!i20783[9]
  i20782.moveTo = new pc.Vec2( i20783[10], i20783[11] )
  i20782.moveDuration = i20783[12]
  i20782.moveEaseType = i20783[13]
  i20782.moveLoopType = i20783[14]
  i20782.moveStartDelay = i20783[15]
  i20782.initialPos = new pc.Vec3( i20783[16], i20783[17], i20783[18] )
  i20782.initialScale = new pc.Vec3( i20783[19], i20783[20], i20783[21] )
  return i20782
}

Deserializers["TileManager"] = function (request, data, root) {
  var i20784 = root || request.c( 'TileManager' )
  var i20785 = data
  i20784.cellWidth = i20785[0]
  i20784.cellHeight = i20785[1]
  request.r(i20785[2], i20785[3], 0, i20784, 'canvasGroup')
  var i20787 = i20785[4]
  var i20786 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i20787.length; i += 2) {
  request.r(i20787[i + 0], i20787[i + 1], 1, i20786, '')
  }
  i20784.cells = i20786
  var i20789 = i20785[5]
  var i20788 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i20789.length; i += 2) {
  request.r(i20789[i + 0], i20789[i + 1], 1, i20788, '')
  }
  i20784.tileDataPool = i20788
  i20784.GridHeight = i20785[6]
  i20784.SequenceDelay = i20785[7]
  i20784.BreakDelay = i20785[8]
  i20784.FallDelay = i20785[9]
  i20784.CheckDelay = i20785[10]
  i20784.levelColorValues = i20785[11]
  var i20791 = i20785[12]
  var i20790 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i20791.length; i += 2) {
  request.r(i20791[i + 0], i20791[i + 1], 1, i20790, '')
  }
  i20784.powerupDataPool = i20790
  request.r(i20785[13], i20785[14], 0, i20784, 'dynamitePowerup')
  return i20784
}

Deserializers["SpecialTileManager"] = function (request, data, root) {
  var i20796 = root || request.c( 'SpecialTileManager' )
  var i20797 = data
  request.r(i20797[0], i20797[1], 0, i20796, 'tileManager')
  var i20799 = i20797[2]
  var i20798 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i20799.length; i += 2) {
  request.r(i20799[i + 0], i20799[i + 1], 1, i20798, '')
  }
  i20796.cellList = i20798
  var i20801 = i20797[3]
  var i20800 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonGraphic')))
  for(var i = 0; i < i20801.length; i += 2) {
  request.r(i20801[i + 0], i20801[i + 1], 1, i20800, '')
  }
  i20796.SpecialTiles = i20800
  i20796.specialTileTargetPos = i20797[4]
  i20796.pigPos = i20797[5]
  i20796.chickenPos = i20797[6]
  return i20796
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i20804 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i20805 = data
  i20804.m_Spacing = i20805[0]
  i20804.m_ChildForceExpandWidth = !!i20805[1]
  i20804.m_ChildForceExpandHeight = !!i20805[2]
  i20804.m_ChildControlWidth = !!i20805[3]
  i20804.m_ChildControlHeight = !!i20805[4]
  i20804.m_ChildScaleWidth = !!i20805[5]
  i20804.m_ChildScaleHeight = !!i20805[6]
  i20804.m_ReverseArrangement = !!i20805[7]
  i20804.m_Padding = UnityEngine.RectOffset.FromPaddings(i20805[8], i20805[9], i20805[10], i20805[11])
  i20804.m_ChildAlignment = i20805[12]
  return i20804
}

Deserializers["UIMoveTo"] = function (request, data, root) {
  var i20806 = root || request.c( 'UIMoveTo' )
  var i20807 = data
  request.r(i20807[0], i20807[1], 0, i20806, 'imageTransform')
  i20806.targetPosition = new pc.Vec2( i20807[2], i20807[3] )
  i20806.anticipationOffset = i20807[4]
  i20806.duration = i20807[5]
  i20806.enableOnStart = !!i20807[6]
  i20806.delayBeforeStart = i20807[7]
  i20806.delayBeforeEnd = i20807[8]
  i20806.OnMovementStart = request.d('UnityEngine.Events.UnityEvent', i20807[9], i20806.OnMovementStart)
  i20806.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i20807[10], i20806.OnMovementComplete)
  var i20809 = i20807[11]
  var i20808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i20809.length; i += 2) {
  request.r(i20809[i + 0], i20809[i + 1], 1, i20808, '')
  }
  i20806.objectsToEnable = i20808
  return i20806
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i20810 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i20811 = data
  i20810.m_StartCorner = i20811[0]
  i20810.m_StartAxis = i20811[1]
  i20810.m_CellSize = new pc.Vec2( i20811[2], i20811[3] )
  i20810.m_Spacing = new pc.Vec2( i20811[4], i20811[5] )
  i20810.m_Constraint = i20811[6]
  i20810.m_ConstraintCount = i20811[7]
  i20810.m_Padding = UnityEngine.RectOffset.FromPaddings(i20811[8], i20811[9], i20811[10], i20811[11])
  i20810.m_ChildAlignment = i20811[12]
  return i20810
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i20812 = root || request.c( 'UnityEngine.UI.Mask' )
  var i20813 = data
  i20812.m_ShowMaskGraphic = !!i20813[0]
  return i20812
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i20814 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i20815 = data
  request.r(i20815[0], i20815[1], 0, i20814, 'skeletonDataAsset')
  request.r(i20815[2], i20815[3], 0, i20814, 'additiveMaterial')
  request.r(i20815[4], i20815[5], 0, i20814, 'multiplyMaterial')
  request.r(i20815[6], i20815[7], 0, i20814, 'screenMaterial')
  i20814.initialSkinName = i20815[8]
  i20814.initialFlipX = !!i20815[9]
  i20814.initialFlipY = !!i20815[10]
  i20814.startingAnimation = i20815[11]
  i20814.startingLoop = !!i20815[12]
  i20814.timeScale = i20815[13]
  i20814.freeze = !!i20815[14]
  i20814.layoutScaleMode = i20815[15]
  i20814.updateWhenInvisible = i20815[16]
  i20814.allowMultipleCanvasRenderers = !!i20815[17]
  var i20817 = i20815[18]
  var i20816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i20817.length; i += 2) {
  request.r(i20817[i + 0], i20817[i + 1], 1, i20816, '')
  }
  i20814.canvasRenderers = i20816
  i20814.enableSeparatorSlots = !!i20815[19]
  i20814.updateSeparatorPartLocation = !!i20815[20]
  i20814.updateSeparatorPartScale = !!i20815[21]
  i20814.disableMeshAssignmentOnOverride = !!i20815[22]
  i20814.m_SkeletonColor = new pc.Color(i20815[23], i20815[24], i20815[25], i20815[26])
  i20814.referenceSize = new pc.Vec2( i20815[27], i20815[28] )
  i20814.pivotOffset = new pc.Vec2( i20815[29], i20815[30] )
  i20814.referenceScale = i20815[31]
  i20814.layoutScale = i20815[32]
  i20814.rectTransformSize = new pc.Vec2( i20815[33], i20815[34] )
  i20814.editReferenceRect = !!i20815[35]
  var i20819 = i20815[36]
  var i20818 = []
  for(var i = 0; i < i20819.length; i += 1) {
    i20818.push( i20819[i + 0] );
  }
  i20814.separatorSlotNames = i20818
  var i20821 = i20815[37]
  var i20820 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i20821.length; i += 2) {
  request.r(i20821[i + 0], i20821[i + 1], 1, i20820, '')
  }
  i20814.separatorParts = i20820
  i20814.physicsPositionInheritanceFactor = new pc.Vec2( i20815[38], i20815[39] )
  i20814.physicsRotationInheritanceFactor = i20815[40]
  request.r(i20815[41], i20815[42], 0, i20814, 'physicsMovementRelativeTo')
  i20814.meshGenerator = request.d('Spine.Unity.MeshGenerator', i20815[43], i20814.meshGenerator)
  i20814.updateTiming = i20815[44]
  i20814.unscaledTime = !!i20815[45]
  request.r(i20815[46], i20815[47], 0, i20814, 'm_Material')
  i20814.m_Maskable = !!i20815[48]
  i20814.m_Color = new pc.Color(i20815[49], i20815[50], i20815[51], i20815[52])
  i20814.m_RaycastTarget = !!i20815[53]
  i20814.m_RaycastPadding = new pc.Vec4( i20815[54], i20815[55], i20815[56], i20815[57] )
  return i20814
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i20828 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i20829 = data
  i20828.settings = request.d('Spine.Unity.MeshGenerator+Settings', i20829[0], i20828.settings)
  return i20828
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i20830 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i20831 = data
  i20830.useClipping = !!i20831[0]
  i20830.zSpacing = i20831[1]
  i20830.tintBlack = !!i20831[2]
  i20830.canvasGroupCompatible = !!i20831[3]
  i20830.pmaVertexColors = !!i20831[4]
  i20830.addNormals = !!i20831[5]
  i20830.calculateTangents = !!i20831[6]
  i20830.immutableTriangles = !!i20831[7]
  return i20830
}

Deserializers["AnimatedTileSpawner"] = function (request, data, root) {
  var i20832 = root || request.c( 'AnimatedTileSpawner' )
  var i20833 = data
  var i20835 = i20833[0]
  var i20834 = new (System.Collections.Generic.List$1(Bridge.ns('AnimatedTile')))
  for(var i = 0; i < i20835.length; i += 2) {
  request.r(i20835[i + 0], i20835[i + 1], 1, i20834, '')
  }
  i20832.tiles = i20834
  return i20832
}

Deserializers["DynamiteEffect"] = function (request, data, root) {
  var i20838 = root || request.c( 'DynamiteEffect' )
  var i20839 = data
  i20838.initialScale = new pc.Vec3( i20839[0], i20839[1], i20839[2] )
  i20838.targetPos = new pc.Vec3( i20839[3], i20839[4], i20839[5] )
  i20838.duration = i20839[6]
  request.r(i20839[7], i20839[8], 0, i20838, 'model')
  request.r(i20839[9], i20839[10], 0, i20838, 'explosionEffectPrefab')
  return i20838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i20840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i20841 = data
  i20840.enabled = !!i20841[0]
  request.r(i20841[1], i20841[2], 0, i20840, 'sharedMaterial')
  var i20843 = i20841[3]
  var i20842 = []
  for(var i = 0; i < i20843.length; i += 2) {
  request.r(i20843[i + 0], i20843[i + 1], 2, i20842, '')
  }
  i20840.sharedMaterials = i20842
  i20840.receiveShadows = !!i20841[4]
  i20840.shadowCastingMode = i20841[5]
  i20840.sortingLayerID = i20841[6]
  i20840.sortingOrder = i20841[7]
  i20840.lightmapIndex = i20841[8]
  i20840.lightmapSceneIndex = i20841[9]
  i20840.lightmapScaleOffset = new pc.Vec4( i20841[10], i20841[11], i20841[12], i20841[13] )
  i20840.lightProbeUsage = i20841[14]
  i20840.reflectionProbeUsage = i20841[15]
  i20840.color = new pc.Color(i20841[16], i20841[17], i20841[18], i20841[19])
  request.r(i20841[20], i20841[21], 0, i20840, 'sprite')
  i20840.flipX = !!i20841[22]
  i20840.flipY = !!i20841[23]
  i20840.drawMode = i20841[24]
  i20840.size = new pc.Vec2( i20841[25], i20841[26] )
  i20840.tileMode = i20841[27]
  i20840.adaptiveModeThreshold = i20841[28]
  i20840.maskInteraction = i20841[29]
  i20840.spriteSortPoint = i20841[30]
  return i20840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i20844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i20845 = data
  request.r(i20845[0], i20845[1], 0, i20844, 'animatorController')
  request.r(i20845[2], i20845[3], 0, i20844, 'avatar')
  i20844.updateMode = i20845[4]
  i20844.hasTransformHierarchy = !!i20845[5]
  i20844.applyRootMotion = !!i20845[6]
  var i20847 = i20845[7]
  var i20846 = []
  for(var i = 0; i < i20847.length; i += 2) {
  request.r(i20847[i + 0], i20847[i + 1], 2, i20846, '')
  }
  i20844.humanBones = i20846
  i20844.enabled = !!i20845[8]
  return i20844
}

Deserializers["MergeHands"] = function (request, data, root) {
  var i20850 = root || request.c( 'MergeHands' )
  var i20851 = data
  request.r(i20851[0], i20851[1], 0, i20850, 'rectTransform')
  request.r(i20851[2], i20851[3], 0, i20850, 'target1')
  request.r(i20851[4], i20851[5], 0, i20850, 'target2')
  return i20850
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i20852 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i20853 = data
  request.r(i20853[0], i20853[1], 0, i20852, 'm_FirstSelected')
  i20852.m_sendNavigationEvents = !!i20853[2]
  i20852.m_DragThreshold = i20853[3]
  return i20852
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i20854 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i20855 = data
  i20854.m_HorizontalAxis = i20855[0]
  i20854.m_VerticalAxis = i20855[1]
  i20854.m_SubmitButton = i20855[2]
  i20854.m_CancelButton = i20855[3]
  i20854.m_InputActionsPerSecond = i20855[4]
  i20854.m_RepeatDelay = i20855[5]
  i20854.m_ForceModuleActive = !!i20855[6]
  i20854.m_SendPointerHoverToParent = !!i20855[7]
  return i20854
}

Deserializers["GameManager"] = function (request, data, root) {
  var i20856 = root || request.c( 'GameManager' )
  var i20857 = data
  i20856.IsSIP = !!i20857[0]
  i20856.gameType = i20857[1]
  i20856.toggleInactivityPanel = !!i20857[2]
  i20856.OnStartMIP1 = request.d('UnityEngine.Events.UnityEvent', i20857[3], i20856.OnStartMIP1)
  i20856.OnStartMIP2 = request.d('UnityEngine.Events.UnityEvent', i20857[4], i20856.OnStartMIP2)
  i20856.IsDoneCollecting = !!i20857[5]
  i20856.OnLevelComplete = request.d('UnityEngine.Events.UnityEvent', i20857[6], i20856.OnLevelComplete)
  request.r(i20857[7], i20857[8], 0, i20856, 'TutorialPanel')
  request.r(i20857[9], i20857[10], 0, i20856, 'GamePanel')
  request.r(i20857[11], i20857[12], 0, i20856, 'EndCard')
  request.r(i20857[13], i20857[14], 0, i20856, 'CTAPanel')
  request.r(i20857[15], i20857[16], 0, i20856, 'FailPanel')
  request.r(i20857[17], i20857[18], 0, i20856, 'EndCardInActivityPanel')
  i20856.iosLink = i20857[19]
  i20856.androidLink = i20857[20]
  i20856.hasTimer = !!i20857[21]
  i20856.currentTimer = i20857[22]
  i20856.maxTime = i20857[23]
  i20856.gameOver = !!i20857[24]
  request.r(i20857[25], i20857[26], 0, i20856, 'inactivityPanel')
  request.r(i20857[27], i20857[28], 0, i20856, 'inactivityPanelGame')
  i20856.inactivityTime = i20857[29]
  i20856.inactivityTimer = i20857[30]
  request.r(i20857[31], i20857[32], 0, i20856, 'timerText')
  var i20859 = i20857[33]
  var i20858 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i20859.length; i += 1) {
    i20858.add(request.d('GameManager+FurnitureItems', i20859[i + 0]));
  }
  i20856.items = i20858
  i20856.CurrentLevel = i20857[34]
  var i20861 = i20857[35]
  var i20860 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i20861.length; i += 1) {
    i20860.add(request.d('GameManager+FurnitureItems', i20861[i + 0]));
  }
  i20856.currentFurnitures = i20860
  var i20863 = i20857[36]
  var i20862 = new (System.Collections.Generic.List$1(Bridge.ns('BasicFade')))
  for(var i = 0; i < i20863.length; i += 2) {
  request.r(i20863[i + 0], i20863[i + 1], 1, i20862, '')
  }
  i20856.gameBoards = i20862
  var i20865 = i20857[37]
  var i20864 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationBase')))
  for(var i = 0; i < i20865.length; i += 2) {
  request.r(i20865[i + 0], i20865[i + 1], 1, i20864, '')
  }
  i20856.furnitureDecorations = i20864
  var i20867 = i20857[38]
  var i20866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i20867.length; i += 2) {
  request.r(i20867[i + 0], i20867[i + 1], 1, i20866, '')
  }
  i20856.mip1Objects = i20866
  var i20869 = i20857[39]
  var i20868 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i20869.length; i += 2) {
  request.r(i20869[i + 0], i20869[i + 1], 1, i20868, '')
  }
  i20856.mip2Objects = i20868
  var i20871 = i20857[40]
  var i20870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i20871.length; i += 2) {
  request.r(i20871[i + 0], i20871[i + 1], 1, i20870, '')
  }
  i20856.Feedback = i20870
  var i20873 = i20857[41]
  var i20872 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i20873.length; i += 1) {
    i20872.add(i20873[i + 0]);
  }
  i20856.audioKeys = i20872
  var i20875 = i20857[42]
  var i20874 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i20875.length; i += 1) {
    i20874.add(i20875[i + 0]);
  }
  i20856.cameraPanLocation = i20874
  request.r(i20857[43], i20857[44], 0, i20856, 'cameraPanObject')
  i20856.mip1ButtonPress = !!i20857[45]
  i20856.puzzlesToSolve = i20857[46]
  var i20877 = i20857[47]
  var i20876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i20877.length; i += 2) {
  request.r(i20877[i + 0], i20877[i + 1], 1, i20876, '')
  }
  i20856.redirectButtons = i20876
  return i20856
}

Deserializers["GameManager+FurnitureItems"] = function (request, data, root) {
  var i20880 = root || request.c( 'GameManager+FurnitureItems' )
  var i20881 = data
  i20880.key = i20881[0]
  request.r(i20881[1], i20881[2], 0, i20880, 'value')
  return i20880
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i20888 = root || request.c( 'AudioManager' )
  var i20889 = data
  request.r(i20889[0], i20889[1], 0, i20888, 'library')
  i20888.sfxPoolSize = i20889[2]
  return i20888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i20890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i20891 = data
  i20890.ambientIntensity = i20891[0]
  i20890.reflectionIntensity = i20891[1]
  i20890.ambientMode = i20891[2]
  i20890.ambientLight = new pc.Color(i20891[3], i20891[4], i20891[5], i20891[6])
  i20890.ambientSkyColor = new pc.Color(i20891[7], i20891[8], i20891[9], i20891[10])
  i20890.ambientGroundColor = new pc.Color(i20891[11], i20891[12], i20891[13], i20891[14])
  i20890.ambientEquatorColor = new pc.Color(i20891[15], i20891[16], i20891[17], i20891[18])
  i20890.fogColor = new pc.Color(i20891[19], i20891[20], i20891[21], i20891[22])
  i20890.fogEndDistance = i20891[23]
  i20890.fogStartDistance = i20891[24]
  i20890.fogDensity = i20891[25]
  i20890.fog = !!i20891[26]
  request.r(i20891[27], i20891[28], 0, i20890, 'skybox')
  i20890.fogMode = i20891[29]
  var i20893 = i20891[30]
  var i20892 = []
  for(var i = 0; i < i20893.length; i += 1) {
    i20892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i20893[i + 0]) );
  }
  i20890.lightmaps = i20892
  i20890.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i20891[31], i20890.lightProbes)
  i20890.lightmapsMode = i20891[32]
  i20890.mixedBakeMode = i20891[33]
  i20890.environmentLightingMode = i20891[34]
  i20890.ambientProbe = new pc.SphericalHarmonicsL2(i20891[35])
  i20890.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i20891[36])
  i20890.useReferenceAmbientProbe = !!i20891[37]
  request.r(i20891[38], i20891[39], 0, i20890, 'customReflection')
  request.r(i20891[40], i20891[41], 0, i20890, 'defaultReflection')
  i20890.defaultReflectionMode = i20891[42]
  i20890.defaultReflectionResolution = i20891[43]
  i20890.sunLightObjectId = i20891[44]
  i20890.pixelLightCount = i20891[45]
  i20890.defaultReflectionHDR = !!i20891[46]
  i20890.hasLightDataAsset = !!i20891[47]
  i20890.hasManualGenerate = !!i20891[48]
  return i20890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i20896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i20897 = data
  request.r(i20897[0], i20897[1], 0, i20896, 'lightmapColor')
  request.r(i20897[2], i20897[3], 0, i20896, 'lightmapDirection')
  return i20896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i20898 = root || new UnityEngine.LightProbes()
  var i20899 = data
  return i20898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i20904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i20905 = data
  var i20907 = i20905[0]
  var i20906 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i20907.length; i += 1) {
    i20906.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i20907[i + 0]));
  }
  i20904.ShaderCompilationErrors = i20906
  i20904.name = i20905[1]
  i20904.guid = i20905[2]
  var i20909 = i20905[3]
  var i20908 = []
  for(var i = 0; i < i20909.length; i += 1) {
    i20908.push( i20909[i + 0] );
  }
  i20904.shaderDefinedKeywords = i20908
  var i20911 = i20905[4]
  var i20910 = []
  for(var i = 0; i < i20911.length; i += 1) {
    i20910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i20911[i + 0]) );
  }
  i20904.passes = i20910
  var i20913 = i20905[5]
  var i20912 = []
  for(var i = 0; i < i20913.length; i += 1) {
    i20912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i20913[i + 0]) );
  }
  i20904.usePasses = i20912
  var i20915 = i20905[6]
  var i20914 = []
  for(var i = 0; i < i20915.length; i += 1) {
    i20914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i20915[i + 0]) );
  }
  i20904.defaultParameterValues = i20914
  request.r(i20905[7], i20905[8], 0, i20904, 'unityFallbackShader')
  i20904.readDepth = !!i20905[9]
  i20904.isCreatedByShaderGraph = !!i20905[10]
  i20904.compiled = !!i20905[11]
  return i20904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i20918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i20919 = data
  i20918.shaderName = i20919[0]
  i20918.errorMessage = i20919[1]
  return i20918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i20922 = root || new pc.UnityShaderPass()
  var i20923 = data
  i20922.id = i20923[0]
  i20922.subShaderIndex = i20923[1]
  i20922.name = i20923[2]
  i20922.passType = i20923[3]
  i20922.grabPassTextureName = i20923[4]
  i20922.usePass = !!i20923[5]
  i20922.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i20923[6], i20922.zTest)
  i20922.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i20923[7], i20922.zWrite)
  i20922.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i20923[8], i20922.culling)
  i20922.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i20923[9], i20922.blending)
  i20922.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i20923[10], i20922.alphaBlending)
  i20922.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i20923[11], i20922.colorWriteMask)
  i20922.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i20923[12], i20922.offsetUnits)
  i20922.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i20923[13], i20922.offsetFactor)
  i20922.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i20923[14], i20922.stencilRef)
  i20922.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i20923[15], i20922.stencilReadMask)
  i20922.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i20923[16], i20922.stencilWriteMask)
  i20922.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i20923[17], i20922.stencilOp)
  i20922.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i20923[18], i20922.stencilOpFront)
  i20922.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i20923[19], i20922.stencilOpBack)
  var i20925 = i20923[20]
  var i20924 = []
  for(var i = 0; i < i20925.length; i += 1) {
    i20924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i20925[i + 0]) );
  }
  i20922.tags = i20924
  var i20927 = i20923[21]
  var i20926 = []
  for(var i = 0; i < i20927.length; i += 1) {
    i20926.push( i20927[i + 0] );
  }
  i20922.passDefinedKeywords = i20926
  var i20929 = i20923[22]
  var i20928 = []
  for(var i = 0; i < i20929.length; i += 1) {
    i20928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i20929[i + 0]) );
  }
  i20922.passDefinedKeywordGroups = i20928
  var i20931 = i20923[23]
  var i20930 = []
  for(var i = 0; i < i20931.length; i += 1) {
    i20930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i20931[i + 0]) );
  }
  i20922.variants = i20930
  var i20933 = i20923[24]
  var i20932 = []
  for(var i = 0; i < i20933.length; i += 1) {
    i20932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i20933[i + 0]) );
  }
  i20922.excludedVariants = i20932
  i20922.hasDepthReader = !!i20923[25]
  return i20922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i20934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i20935 = data
  i20934.val = i20935[0]
  i20934.name = i20935[1]
  return i20934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i20936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i20937 = data
  i20936.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i20937[0], i20936.src)
  i20936.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i20937[1], i20936.dst)
  i20936.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i20937[2], i20936.op)
  return i20936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i20938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i20939 = data
  i20938.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i20939[0], i20938.pass)
  i20938.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i20939[1], i20938.fail)
  i20938.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i20939[2], i20938.zFail)
  i20938.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i20939[3], i20938.comp)
  return i20938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i20942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i20943 = data
  i20942.name = i20943[0]
  i20942.value = i20943[1]
  return i20942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i20946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i20947 = data
  var i20949 = i20947[0]
  var i20948 = []
  for(var i = 0; i < i20949.length; i += 1) {
    i20948.push( i20949[i + 0] );
  }
  i20946.keywords = i20948
  i20946.hasDiscard = !!i20947[1]
  return i20946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i20952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i20953 = data
  i20952.passId = i20953[0]
  i20952.subShaderIndex = i20953[1]
  var i20955 = i20953[2]
  var i20954 = []
  for(var i = 0; i < i20955.length; i += 1) {
    i20954.push( i20955[i + 0] );
  }
  i20952.keywords = i20954
  i20952.vertexProgram = i20953[3]
  i20952.fragmentProgram = i20953[4]
  i20952.exportedForWebGl2 = !!i20953[5]
  i20952.readDepth = !!i20953[6]
  return i20952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i20958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i20959 = data
  request.r(i20959[0], i20959[1], 0, i20958, 'shader')
  i20958.pass = i20959[2]
  return i20958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i20962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i20963 = data
  i20962.name = i20963[0]
  i20962.type = i20963[1]
  i20962.value = new pc.Vec4( i20963[2], i20963[3], i20963[4], i20963[5] )
  i20962.textureValue = i20963[6]
  i20962.shaderPropertyFlag = i20963[7]
  return i20962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i20964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i20965 = data
  i20964.name = i20965[0]
  request.r(i20965[1], i20965[2], 0, i20964, 'texture')
  i20964.aabb = i20965[3]
  i20964.vertices = i20965[4]
  i20964.triangles = i20965[5]
  i20964.textureRect = UnityEngine.Rect.MinMaxRect(i20965[6], i20965[7], i20965[8], i20965[9])
  i20964.packedRect = UnityEngine.Rect.MinMaxRect(i20965[10], i20965[11], i20965[12], i20965[13])
  i20964.border = new pc.Vec4( i20965[14], i20965[15], i20965[16], i20965[17] )
  i20964.transparency = i20965[18]
  i20964.bounds = i20965[19]
  i20964.pixelsPerUnit = i20965[20]
  i20964.textureWidth = i20965[21]
  i20964.textureHeight = i20965[22]
  i20964.nativeSize = new pc.Vec2( i20965[23], i20965[24] )
  i20964.pivot = new pc.Vec2( i20965[25], i20965[26] )
  i20964.textureRectOffset = new pc.Vec2( i20965[27], i20965[28] )
  return i20964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i20966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i20967 = data
  i20966.name = i20967[0]
  return i20966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i20968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i20969 = data
  i20968.name = i20969[0]
  i20968.wrapMode = i20969[1]
  i20968.isLooping = !!i20969[2]
  i20968.length = i20969[3]
  var i20971 = i20969[4]
  var i20970 = []
  for(var i = 0; i < i20971.length; i += 1) {
    i20970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i20971[i + 0]) );
  }
  i20968.curves = i20970
  var i20973 = i20969[5]
  var i20972 = []
  for(var i = 0; i < i20973.length; i += 1) {
    i20972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i20973[i + 0]) );
  }
  i20968.events = i20972
  i20968.halfPrecision = !!i20969[6]
  i20968._frameRate = i20969[7]
  i20968.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i20969[8], i20968.localBounds)
  i20968.hasMuscleCurves = !!i20969[9]
  var i20975 = i20969[10]
  var i20974 = []
  for(var i = 0; i < i20975.length; i += 1) {
    i20974.push( i20975[i + 0] );
  }
  i20968.clipMuscleConstant = i20974
  i20968.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i20969[11], i20968.clipBindingConstant)
  return i20968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i20978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i20979 = data
  i20978.path = i20979[0]
  i20978.hash = i20979[1]
  i20978.componentType = i20979[2]
  i20978.property = i20979[3]
  i20978.keys = i20979[4]
  var i20981 = i20979[5]
  var i20980 = []
  for(var i = 0; i < i20981.length; i += 1) {
    i20980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i20981[i + 0]) );
  }
  i20978.objectReferenceKeys = i20980
  return i20978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i20984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i20985 = data
  i20984.time = i20985[0]
  request.r(i20985[1], i20985[2], 0, i20984, 'value')
  return i20984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i20988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i20989 = data
  i20988.functionName = i20989[0]
  i20988.floatParameter = i20989[1]
  i20988.intParameter = i20989[2]
  i20988.stringParameter = i20989[3]
  request.r(i20989[4], i20989[5], 0, i20988, 'objectReferenceParameter')
  i20988.time = i20989[6]
  return i20988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i20990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i20991 = data
  i20990.center = new pc.Vec3( i20991[0], i20991[1], i20991[2] )
  i20990.extends = new pc.Vec3( i20991[3], i20991[4], i20991[5] )
  return i20990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i20994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i20995 = data
  var i20997 = i20995[0]
  var i20996 = []
  for(var i = 0; i < i20997.length; i += 1) {
    i20996.push( i20997[i + 0] );
  }
  i20994.genericBindings = i20996
  var i20999 = i20995[1]
  var i20998 = []
  for(var i = 0; i < i20999.length; i += 1) {
    i20998.push( i20999[i + 0] );
  }
  i20994.pptrCurveMapping = i20998
  return i20994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i21000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i21001 = data
  i21000.name = i21001[0]
  i21000.ascent = i21001[1]
  i21000.originalLineHeight = i21001[2]
  i21000.fontSize = i21001[3]
  var i21003 = i21001[4]
  var i21002 = []
  for(var i = 0; i < i21003.length; i += 1) {
    i21002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i21003[i + 0]) );
  }
  i21000.characterInfo = i21002
  request.r(i21001[5], i21001[6], 0, i21000, 'texture')
  i21000.originalFontSize = i21001[7]
  return i21000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i21006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i21007 = data
  i21006.index = i21007[0]
  i21006.advance = i21007[1]
  i21006.bearing = i21007[2]
  i21006.glyphWidth = i21007[3]
  i21006.glyphHeight = i21007[4]
  i21006.minX = i21007[5]
  i21006.maxX = i21007[6]
  i21006.minY = i21007[7]
  i21006.maxY = i21007[8]
  i21006.uvBottomLeftX = i21007[9]
  i21006.uvBottomLeftY = i21007[10]
  i21006.uvBottomRightX = i21007[11]
  i21006.uvBottomRightY = i21007[12]
  i21006.uvTopLeftX = i21007[13]
  i21006.uvTopLeftY = i21007[14]
  i21006.uvTopRightX = i21007[15]
  i21006.uvTopRightY = i21007[16]
  return i21006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i21008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i21009 = data
  i21008.name = i21009[0]
  var i21011 = i21009[1]
  var i21010 = []
  for(var i = 0; i < i21011.length; i += 1) {
    i21010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i21011[i + 0]) );
  }
  i21008.layers = i21010
  var i21013 = i21009[2]
  var i21012 = []
  for(var i = 0; i < i21013.length; i += 1) {
    i21012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i21013[i + 0]) );
  }
  i21008.parameters = i21012
  i21008.animationClips = i21009[3]
  i21008.avatarUnsupported = i21009[4]
  return i21008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i21016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i21017 = data
  i21016.name = i21017[0]
  i21016.defaultWeight = i21017[1]
  i21016.blendingMode = i21017[2]
  i21016.avatarMask = i21017[3]
  i21016.syncedLayerIndex = i21017[4]
  i21016.syncedLayerAffectsTiming = !!i21017[5]
  i21016.syncedLayers = i21017[6]
  i21016.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i21017[7], i21016.stateMachine)
  return i21016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i21018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i21019 = data
  i21018.id = i21019[0]
  i21018.name = i21019[1]
  i21018.path = i21019[2]
  var i21021 = i21019[3]
  var i21020 = []
  for(var i = 0; i < i21021.length; i += 1) {
    i21020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i21021[i + 0]) );
  }
  i21018.states = i21020
  var i21023 = i21019[4]
  var i21022 = []
  for(var i = 0; i < i21023.length; i += 1) {
    i21022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i21023[i + 0]) );
  }
  i21018.machines = i21022
  var i21025 = i21019[5]
  var i21024 = []
  for(var i = 0; i < i21025.length; i += 1) {
    i21024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i21025[i + 0]) );
  }
  i21018.entryStateTransitions = i21024
  var i21027 = i21019[6]
  var i21026 = []
  for(var i = 0; i < i21027.length; i += 1) {
    i21026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i21027[i + 0]) );
  }
  i21018.exitStateTransitions = i21026
  var i21029 = i21019[7]
  var i21028 = []
  for(var i = 0; i < i21029.length; i += 1) {
    i21028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i21029[i + 0]) );
  }
  i21018.anyStateTransitions = i21028
  i21018.defaultStateId = i21019[8]
  return i21018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i21032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i21033 = data
  i21032.id = i21033[0]
  i21032.name = i21033[1]
  i21032.cycleOffset = i21033[2]
  i21032.cycleOffsetParameter = i21033[3]
  i21032.cycleOffsetParameterActive = !!i21033[4]
  i21032.mirror = !!i21033[5]
  i21032.mirrorParameter = i21033[6]
  i21032.mirrorParameterActive = !!i21033[7]
  i21032.motionId = i21033[8]
  i21032.nameHash = i21033[9]
  i21032.fullPathHash = i21033[10]
  i21032.speed = i21033[11]
  i21032.speedParameter = i21033[12]
  i21032.speedParameterActive = !!i21033[13]
  i21032.tag = i21033[14]
  i21032.tagHash = i21033[15]
  i21032.writeDefaultValues = !!i21033[16]
  var i21035 = i21033[17]
  var i21034 = []
  for(var i = 0; i < i21035.length; i += 2) {
  request.r(i21035[i + 0], i21035[i + 1], 2, i21034, '')
  }
  i21032.behaviours = i21034
  var i21037 = i21033[18]
  var i21036 = []
  for(var i = 0; i < i21037.length; i += 1) {
    i21036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i21037[i + 0]) );
  }
  i21032.transitions = i21036
  return i21032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i21042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i21043 = data
  i21042.fullPath = i21043[0]
  i21042.canTransitionToSelf = !!i21043[1]
  i21042.duration = i21043[2]
  i21042.exitTime = i21043[3]
  i21042.hasExitTime = !!i21043[4]
  i21042.hasFixedDuration = !!i21043[5]
  i21042.interruptionSource = i21043[6]
  i21042.offset = i21043[7]
  i21042.orderedInterruption = !!i21043[8]
  i21042.destinationStateId = i21043[9]
  i21042.isExit = !!i21043[10]
  i21042.mute = !!i21043[11]
  i21042.solo = !!i21043[12]
  var i21045 = i21043[13]
  var i21044 = []
  for(var i = 0; i < i21045.length; i += 1) {
    i21044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i21045[i + 0]) );
  }
  i21042.conditions = i21044
  return i21042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i21050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i21051 = data
  i21050.destinationStateId = i21051[0]
  i21050.isExit = !!i21051[1]
  i21050.mute = !!i21051[2]
  i21050.solo = !!i21051[3]
  var i21053 = i21051[4]
  var i21052 = []
  for(var i = 0; i < i21053.length; i += 1) {
    i21052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i21053[i + 0]) );
  }
  i21050.conditions = i21052
  return i21050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i21056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i21057 = data
  i21056.defaultBool = !!i21057[0]
  i21056.defaultFloat = i21057[1]
  i21056.defaultInt = i21057[2]
  i21056.name = i21057[3]
  i21056.nameHash = i21057[4]
  i21056.type = i21057[5]
  return i21056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i21058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i21059 = data
  i21058.name = i21059[0]
  i21058.bytes64 = i21059[1]
  i21058.data = i21059[2]
  return i21058
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i21060 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i21061 = data
  i21060.hashCode = i21061[0]
  request.r(i21061[1], i21061[2], 0, i21060, 'material')
  i21060.materialHashCode = i21061[3]
  request.r(i21061[4], i21061[5], 0, i21060, 'atlas')
  i21060.normalStyle = i21061[6]
  i21060.normalSpacingOffset = i21061[7]
  i21060.boldStyle = i21061[8]
  i21060.boldSpacing = i21061[9]
  i21060.italicStyle = i21061[10]
  i21060.tabSize = i21061[11]
  i21060.m_Version = i21061[12]
  i21060.m_SourceFontFileGUID = i21061[13]
  request.r(i21061[14], i21061[15], 0, i21060, 'm_SourceFontFile_EditorRef')
  request.r(i21061[16], i21061[17], 0, i21060, 'm_SourceFontFile')
  i21060.m_AtlasPopulationMode = i21061[18]
  i21060.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i21061[19], i21060.m_FaceInfo)
  var i21063 = i21061[20]
  var i21062 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i21063.length; i += 1) {
    i21062.add(request.d('UnityEngine.TextCore.Glyph', i21063[i + 0]));
  }
  i21060.m_GlyphTable = i21062
  var i21065 = i21061[21]
  var i21064 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i21065.length; i += 1) {
    i21064.add(request.d('TMPro.TMP_Character', i21065[i + 0]));
  }
  i21060.m_CharacterTable = i21064
  var i21067 = i21061[22]
  var i21066 = []
  for(var i = 0; i < i21067.length; i += 2) {
  request.r(i21067[i + 0], i21067[i + 1], 2, i21066, '')
  }
  i21060.m_AtlasTextures = i21066
  i21060.m_AtlasTextureIndex = i21061[23]
  i21060.m_IsMultiAtlasTexturesEnabled = !!i21061[24]
  i21060.m_ClearDynamicDataOnBuild = !!i21061[25]
  var i21069 = i21061[26]
  var i21068 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i21069.length; i += 1) {
    i21068.add(request.d('UnityEngine.TextCore.GlyphRect', i21069[i + 0]));
  }
  i21060.m_UsedGlyphRects = i21068
  var i21071 = i21061[27]
  var i21070 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i21071.length; i += 1) {
    i21070.add(request.d('UnityEngine.TextCore.GlyphRect', i21071[i + 0]));
  }
  i21060.m_FreeGlyphRects = i21070
  i21060.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i21061[28], i21060.m_fontInfo)
  i21060.m_AtlasWidth = i21061[29]
  i21060.m_AtlasHeight = i21061[30]
  i21060.m_AtlasPadding = i21061[31]
  i21060.m_AtlasRenderMode = i21061[32]
  var i21073 = i21061[33]
  var i21072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i21073.length; i += 1) {
    i21072.add(request.d('TMPro.TMP_Glyph', i21073[i + 0]));
  }
  i21060.m_glyphInfoList = i21072
  i21060.m_KerningTable = request.d('TMPro.KerningTable', i21061[34], i21060.m_KerningTable)
  i21060.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i21061[35], i21060.m_FontFeatureTable)
  var i21075 = i21061[36]
  var i21074 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i21075.length; i += 2) {
  request.r(i21075[i + 0], i21075[i + 1], 1, i21074, '')
  }
  i21060.fallbackFontAssets = i21074
  var i21077 = i21061[37]
  var i21076 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i21077.length; i += 2) {
  request.r(i21077[i + 0], i21077[i + 1], 1, i21076, '')
  }
  i21060.m_FallbackFontAssetTable = i21076
  i21060.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i21061[38], i21060.m_CreationSettings)
  var i21079 = i21061[39]
  var i21078 = []
  for(var i = 0; i < i21079.length; i += 1) {
    i21078.push( request.d('TMPro.TMP_FontWeightPair', i21079[i + 0]) );
  }
  i21060.m_FontWeightTable = i21078
  var i21081 = i21061[40]
  var i21080 = []
  for(var i = 0; i < i21081.length; i += 1) {
    i21080.push( request.d('TMPro.TMP_FontWeightPair', i21081[i + 0]) );
  }
  i21060.fontWeights = i21080
  return i21060
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i21082 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i21083 = data
  i21082.m_FaceIndex = i21083[0]
  i21082.m_FamilyName = i21083[1]
  i21082.m_StyleName = i21083[2]
  i21082.m_PointSize = i21083[3]
  i21082.m_Scale = i21083[4]
  i21082.m_UnitsPerEM = i21083[5]
  i21082.m_LineHeight = i21083[6]
  i21082.m_AscentLine = i21083[7]
  i21082.m_CapLine = i21083[8]
  i21082.m_MeanLine = i21083[9]
  i21082.m_Baseline = i21083[10]
  i21082.m_DescentLine = i21083[11]
  i21082.m_SuperscriptOffset = i21083[12]
  i21082.m_SuperscriptSize = i21083[13]
  i21082.m_SubscriptOffset = i21083[14]
  i21082.m_SubscriptSize = i21083[15]
  i21082.m_UnderlineOffset = i21083[16]
  i21082.m_UnderlineThickness = i21083[17]
  i21082.m_StrikethroughOffset = i21083[18]
  i21082.m_StrikethroughThickness = i21083[19]
  i21082.m_TabWidth = i21083[20]
  return i21082
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i21086 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i21087 = data
  i21086.m_Index = i21087[0]
  i21086.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i21087[1], i21086.m_Metrics)
  i21086.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i21087[2], i21086.m_GlyphRect)
  i21086.m_Scale = i21087[3]
  i21086.m_AtlasIndex = i21087[4]
  i21086.m_ClassDefinitionType = i21087[5]
  return i21086
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i21088 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i21089 = data
  i21088.m_Width = i21089[0]
  i21088.m_Height = i21089[1]
  i21088.m_HorizontalBearingX = i21089[2]
  i21088.m_HorizontalBearingY = i21089[3]
  i21088.m_HorizontalAdvance = i21089[4]
  return i21088
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i21090 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i21091 = data
  i21090.m_X = i21091[0]
  i21090.m_Y = i21091[1]
  i21090.m_Width = i21091[2]
  i21090.m_Height = i21091[3]
  return i21090
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i21094 = root || request.c( 'TMPro.TMP_Character' )
  var i21095 = data
  i21094.m_ElementType = i21095[0]
  i21094.m_Unicode = i21095[1]
  i21094.m_GlyphIndex = i21095[2]
  i21094.m_Scale = i21095[3]
  return i21094
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i21100 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i21101 = data
  i21100.Name = i21101[0]
  i21100.PointSize = i21101[1]
  i21100.Scale = i21101[2]
  i21100.CharacterCount = i21101[3]
  i21100.LineHeight = i21101[4]
  i21100.Baseline = i21101[5]
  i21100.Ascender = i21101[6]
  i21100.CapHeight = i21101[7]
  i21100.Descender = i21101[8]
  i21100.CenterLine = i21101[9]
  i21100.SuperscriptOffset = i21101[10]
  i21100.SubscriptOffset = i21101[11]
  i21100.SubSize = i21101[12]
  i21100.Underline = i21101[13]
  i21100.UnderlineThickness = i21101[14]
  i21100.strikethrough = i21101[15]
  i21100.strikethroughThickness = i21101[16]
  i21100.TabWidth = i21101[17]
  i21100.Padding = i21101[18]
  i21100.AtlasWidth = i21101[19]
  i21100.AtlasHeight = i21101[20]
  return i21100
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i21104 = root || request.c( 'TMPro.TMP_Glyph' )
  var i21105 = data
  i21104.id = i21105[0]
  i21104.x = i21105[1]
  i21104.y = i21105[2]
  i21104.width = i21105[3]
  i21104.height = i21105[4]
  i21104.xOffset = i21105[5]
  i21104.yOffset = i21105[6]
  i21104.xAdvance = i21105[7]
  i21104.scale = i21105[8]
  return i21104
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i21106 = root || request.c( 'TMPro.KerningTable' )
  var i21107 = data
  var i21109 = i21107[0]
  var i21108 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i21109.length; i += 1) {
    i21108.add(request.d('TMPro.KerningPair', i21109[i + 0]));
  }
  i21106.kerningPairs = i21108
  return i21106
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i21112 = root || request.c( 'TMPro.KerningPair' )
  var i21113 = data
  i21112.xOffset = i21113[0]
  i21112.m_FirstGlyph = i21113[1]
  i21112.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i21113[2], i21112.m_FirstGlyphAdjustments)
  i21112.m_SecondGlyph = i21113[3]
  i21112.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i21113[4], i21112.m_SecondGlyphAdjustments)
  i21112.m_IgnoreSpacingAdjustments = !!i21113[5]
  return i21112
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i21114 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i21115 = data
  var i21117 = i21115[0]
  var i21116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i21117.length; i += 1) {
    i21116.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i21117[i + 0]));
  }
  i21114.m_GlyphPairAdjustmentRecords = i21116
  return i21114
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i21120 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i21121 = data
  i21120.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i21121[0], i21120.m_FirstAdjustmentRecord)
  i21120.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i21121[1], i21120.m_SecondAdjustmentRecord)
  i21120.m_FeatureLookupFlags = i21121[2]
  return i21120
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i21124 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i21125 = data
  i21124.sourceFontFileName = i21125[0]
  i21124.sourceFontFileGUID = i21125[1]
  i21124.pointSizeSamplingMode = i21125[2]
  i21124.pointSize = i21125[3]
  i21124.padding = i21125[4]
  i21124.packingMode = i21125[5]
  i21124.atlasWidth = i21125[6]
  i21124.atlasHeight = i21125[7]
  i21124.characterSetSelectionMode = i21125[8]
  i21124.characterSequence = i21125[9]
  i21124.referencedFontAssetGUID = i21125[10]
  i21124.referencedTextAssetGUID = i21125[11]
  i21124.fontStyle = i21125[12]
  i21124.fontStyleModifier = i21125[13]
  i21124.renderMode = i21125[14]
  i21124.includeFontFeatures = !!i21125[15]
  return i21124
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i21128 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i21129 = data
  request.r(i21129[0], i21129[1], 0, i21128, 'regularTypeface')
  request.r(i21129[2], i21129[3], 0, i21128, 'italicTypeface')
  return i21128
}

Deserializers["ItemData"] = function (request, data, root) {
  var i21130 = root || request.c( 'ItemData' )
  var i21131 = data
  i21130.itemName = i21131[0]
  request.r(i21131[1], i21131[2], 0, i21130, 'itemIcon')
  i21130.ItemCount = i21131[3]
  request.r(i21131[4], i21131[5], 0, i21130, 'collectItemSprite')
  i21130.color = i21131[6]
  request.r(i21131[7], i21131[8], 0, i21130, 'DecorationSprite')
  return i21130
}

Deserializers["TileData"] = function (request, data, root) {
  var i21132 = root || request.c( 'TileData' )
  var i21133 = data
  i21132.tileName = i21133[0]
  request.r(i21133[1], i21133[2], 0, i21132, 'tileSprite')
  i21132.isPowerup = !!i21133[3]
  i21132.isBreakable = !!i21133[4]
  i21132.isSwappable = !!i21133[5]
  i21132.isSpecialBreakable = !!i21133[6]
  return i21132
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i21134 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i21135 = data
  var i21137 = i21135[0]
  var i21136 = []
  for(var i = 0; i < i21137.length; i += 2) {
  request.r(i21137[i + 0], i21137[i + 1], 2, i21136, '')
  }
  i21134.atlasAssets = i21136
  i21134.scale = i21135[1]
  request.r(i21135[2], i21135[3], 0, i21134, 'skeletonJSON')
  i21134.isUpgradingBlendModeMaterials = !!i21135[4]
  i21134.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i21135[5], i21134.blendModeMaterials)
  var i21139 = i21135[6]
  var i21138 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i21139.length; i += 2) {
  request.r(i21139[i + 0], i21139[i + 1], 1, i21138, '')
  }
  i21134.skeletonDataModifiers = i21138
  var i21141 = i21135[7]
  var i21140 = []
  for(var i = 0; i < i21141.length; i += 1) {
    i21140.push( i21141[i + 0] );
  }
  i21134.fromAnimation = i21140
  var i21143 = i21135[8]
  var i21142 = []
  for(var i = 0; i < i21143.length; i += 1) {
    i21142.push( i21143[i + 0] );
  }
  i21134.toAnimation = i21142
  i21134.duration = i21135[9]
  i21134.defaultMix = i21135[10]
  request.r(i21135[11], i21135[12], 0, i21134, 'controller')
  return i21134
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i21146 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i21147 = data
  i21146.applyAdditiveMaterial = !!i21147[0]
  var i21149 = i21147[1]
  var i21148 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i21149.length; i += 1) {
    i21148.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i21149[i + 0]));
  }
  i21146.additiveMaterials = i21148
  var i21151 = i21147[2]
  var i21150 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i21151.length; i += 1) {
    i21150.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i21151[i + 0]));
  }
  i21146.multiplyMaterials = i21150
  var i21153 = i21147[3]
  var i21152 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i21153.length; i += 1) {
    i21152.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i21153[i + 0]));
  }
  i21146.screenMaterials = i21152
  i21146.requiresBlendModeMaterials = !!i21147[4]
  return i21146
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i21156 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i21157 = data
  i21156.pageName = i21157[0]
  request.r(i21157[1], i21157[2], 0, i21156, 'material')
  return i21156
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i21160 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i21161 = data
  request.r(i21161[0], i21161[1], 0, i21160, 'atlasFile')
  var i21163 = i21161[2]
  var i21162 = []
  for(var i = 0; i < i21163.length; i += 2) {
  request.r(i21163[i + 0], i21163[i + 1], 2, i21162, '')
  }
  i21160.materials = i21162
  i21160.textureLoadingMode = i21161[3]
  request.r(i21161[4], i21161[5], 0, i21160, 'onDemandTextureLoader')
  return i21160
}

Deserializers["DynamitePowerup"] = function (request, data, root) {
  var i21164 = root || request.c( 'DynamitePowerup' )
  var i21165 = data
  i21164.explosionRadius = i21165[0]
  i21164.tileName = i21165[1]
  request.r(i21165[2], i21165[3], 0, i21164, 'tileSprite')
  i21164.isPowerup = !!i21165[4]
  i21164.isBreakable = !!i21165[5]
  i21164.isSwappable = !!i21165[6]
  i21164.isSpecialBreakable = !!i21165[7]
  return i21164
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i21166 = root || request.c( 'AudioLibrary' )
  var i21167 = data
  var i21169 = i21167[0]
  var i21168 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i21169.length; i += 1) {
    i21168.add(request.d('AudioLibrary+ClipEntry', i21169[i + 0]));
  }
  i21166.clips = i21168
  return i21166
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i21172 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i21173 = data
  i21172.key = i21173[0]
  i21172.channel = i21173[1]
  request.r(i21173[2], i21173[3], 0, i21172, 'clip')
  i21172.volume = i21173[4]
  i21172.loop = !!i21173[5]
  return i21172
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i21174 = root || request.c( 'TMPro.TMP_Settings' )
  var i21175 = data
  i21174.m_enableWordWrapping = !!i21175[0]
  i21174.m_enableKerning = !!i21175[1]
  i21174.m_enableExtraPadding = !!i21175[2]
  i21174.m_enableTintAllSprites = !!i21175[3]
  i21174.m_enableParseEscapeCharacters = !!i21175[4]
  i21174.m_EnableRaycastTarget = !!i21175[5]
  i21174.m_GetFontFeaturesAtRuntime = !!i21175[6]
  i21174.m_missingGlyphCharacter = i21175[7]
  i21174.m_warningsDisabled = !!i21175[8]
  request.r(i21175[9], i21175[10], 0, i21174, 'm_defaultFontAsset')
  i21174.m_defaultFontAssetPath = i21175[11]
  i21174.m_defaultFontSize = i21175[12]
  i21174.m_defaultAutoSizeMinRatio = i21175[13]
  i21174.m_defaultAutoSizeMaxRatio = i21175[14]
  i21174.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i21175[15], i21175[16] )
  i21174.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i21175[17], i21175[18] )
  i21174.m_autoSizeTextContainer = !!i21175[19]
  i21174.m_IsTextObjectScaleStatic = !!i21175[20]
  var i21177 = i21175[21]
  var i21176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i21177.length; i += 2) {
  request.r(i21177[i + 0], i21177[i + 1], 1, i21176, '')
  }
  i21174.m_fallbackFontAssets = i21176
  i21174.m_matchMaterialPreset = !!i21175[22]
  request.r(i21175[23], i21175[24], 0, i21174, 'm_defaultSpriteAsset')
  i21174.m_defaultSpriteAssetPath = i21175[25]
  i21174.m_enableEmojiSupport = !!i21175[26]
  i21174.m_MissingCharacterSpriteUnicode = i21175[27]
  i21174.m_defaultColorGradientPresetsPath = i21175[28]
  request.r(i21175[29], i21175[30], 0, i21174, 'm_defaultStyleSheet')
  i21174.m_StyleSheetsResourcePath = i21175[31]
  request.r(i21175[32], i21175[33], 0, i21174, 'm_leadingCharacters')
  request.r(i21175[34], i21175[35], 0, i21174, 'm_followingCharacters')
  i21174.m_UseModernHangulLineBreakingRules = !!i21175[36]
  return i21174
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i21178 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i21179 = data
  i21178.hashCode = i21179[0]
  request.r(i21179[1], i21179[2], 0, i21178, 'material')
  i21178.materialHashCode = i21179[3]
  request.r(i21179[4], i21179[5], 0, i21178, 'spriteSheet')
  var i21181 = i21179[6]
  var i21180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i21181.length; i += 1) {
    i21180.add(request.d('TMPro.TMP_Sprite', i21181[i + 0]));
  }
  i21178.spriteInfoList = i21180
  var i21183 = i21179[7]
  var i21182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i21183.length; i += 2) {
  request.r(i21183[i + 0], i21183[i + 1], 1, i21182, '')
  }
  i21178.fallbackSpriteAssets = i21182
  i21178.m_Version = i21179[8]
  i21178.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i21179[9], i21178.m_FaceInfo)
  var i21185 = i21179[10]
  var i21184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i21185.length; i += 1) {
    i21184.add(request.d('TMPro.TMP_SpriteCharacter', i21185[i + 0]));
  }
  i21178.m_SpriteCharacterTable = i21184
  var i21187 = i21179[11]
  var i21186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i21187.length; i += 1) {
    i21186.add(request.d('TMPro.TMP_SpriteGlyph', i21187[i + 0]));
  }
  i21178.m_SpriteGlyphTable = i21186
  return i21178
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i21190 = root || request.c( 'TMPro.TMP_Sprite' )
  var i21191 = data
  i21190.name = i21191[0]
  i21190.hashCode = i21191[1]
  i21190.unicode = i21191[2]
  i21190.pivot = new pc.Vec2( i21191[3], i21191[4] )
  request.r(i21191[5], i21191[6], 0, i21190, 'sprite')
  i21190.id = i21191[7]
  i21190.x = i21191[8]
  i21190.y = i21191[9]
  i21190.width = i21191[10]
  i21190.height = i21191[11]
  i21190.xOffset = i21191[12]
  i21190.yOffset = i21191[13]
  i21190.xAdvance = i21191[14]
  i21190.scale = i21191[15]
  return i21190
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i21196 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i21197 = data
  i21196.m_Name = i21197[0]
  i21196.m_HashCode = i21197[1]
  i21196.m_ElementType = i21197[2]
  i21196.m_Unicode = i21197[3]
  i21196.m_GlyphIndex = i21197[4]
  i21196.m_Scale = i21197[5]
  return i21196
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i21200 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i21201 = data
  request.r(i21201[0], i21201[1], 0, i21200, 'sprite')
  i21200.m_Index = i21201[2]
  i21200.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i21201[3], i21200.m_Metrics)
  i21200.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i21201[4], i21200.m_GlyphRect)
  i21200.m_Scale = i21201[5]
  i21200.m_AtlasIndex = i21201[6]
  i21200.m_ClassDefinitionType = i21201[7]
  return i21200
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i21202 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i21203 = data
  var i21205 = i21203[0]
  var i21204 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i21205.length; i += 1) {
    i21204.add(request.d('TMPro.TMP_Style', i21205[i + 0]));
  }
  i21202.m_StyleList = i21204
  return i21202
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i21208 = root || request.c( 'TMPro.TMP_Style' )
  var i21209 = data
  i21208.m_Name = i21209[0]
  i21208.m_HashCode = i21209[1]
  i21208.m_OpeningDefinition = i21209[2]
  i21208.m_ClosingDefinition = i21209[3]
  i21208.m_OpeningTagArray = i21209[4]
  i21208.m_ClosingTagArray = i21209[5]
  i21208.m_OpeningTagUnicodeArray = i21209[6]
  i21208.m_ClosingTagUnicodeArray = i21209[7]
  return i21208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i21210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i21211 = data
  var i21213 = i21211[0]
  var i21212 = []
  for(var i = 0; i < i21213.length; i += 1) {
    i21212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i21213[i + 0]) );
  }
  i21210.files = i21212
  i21210.componentToPrefabIds = i21211[1]
  return i21210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i21216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i21217 = data
  i21216.path = i21217[0]
  request.r(i21217[1], i21217[2], 0, i21216, 'unityObject')
  return i21216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i21218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i21219 = data
  var i21221 = i21219[0]
  var i21220 = []
  for(var i = 0; i < i21221.length; i += 1) {
    i21220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i21221[i + 0]) );
  }
  i21218.scriptsExecutionOrder = i21220
  var i21223 = i21219[1]
  var i21222 = []
  for(var i = 0; i < i21223.length; i += 1) {
    i21222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i21223[i + 0]) );
  }
  i21218.sortingLayers = i21222
  var i21225 = i21219[2]
  var i21224 = []
  for(var i = 0; i < i21225.length; i += 1) {
    i21224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i21225[i + 0]) );
  }
  i21218.cullingLayers = i21224
  i21218.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i21219[3], i21218.timeSettings)
  i21218.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i21219[4], i21218.physicsSettings)
  i21218.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i21219[5], i21218.physics2DSettings)
  i21218.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i21219[6], i21218.qualitySettings)
  i21218.enableRealtimeShadows = !!i21219[7]
  i21218.enableAutoInstancing = !!i21219[8]
  i21218.enableDynamicBatching = !!i21219[9]
  i21218.lightmapEncodingQuality = i21219[10]
  i21218.desiredColorSpace = i21219[11]
  var i21227 = i21219[12]
  var i21226 = []
  for(var i = 0; i < i21227.length; i += 1) {
    i21226.push( i21227[i + 0] );
  }
  i21218.allTags = i21226
  return i21218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i21230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i21231 = data
  i21230.name = i21231[0]
  i21230.value = i21231[1]
  return i21230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i21234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i21235 = data
  i21234.id = i21235[0]
  i21234.name = i21235[1]
  i21234.value = i21235[2]
  return i21234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i21238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i21239 = data
  i21238.id = i21239[0]
  i21238.name = i21239[1]
  return i21238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i21240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i21241 = data
  i21240.fixedDeltaTime = i21241[0]
  i21240.maximumDeltaTime = i21241[1]
  i21240.timeScale = i21241[2]
  i21240.maximumParticleTimestep = i21241[3]
  return i21240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i21242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i21243 = data
  i21242.gravity = new pc.Vec3( i21243[0], i21243[1], i21243[2] )
  i21242.defaultSolverIterations = i21243[3]
  i21242.bounceThreshold = i21243[4]
  i21242.autoSyncTransforms = !!i21243[5]
  i21242.autoSimulation = !!i21243[6]
  var i21245 = i21243[7]
  var i21244 = []
  for(var i = 0; i < i21245.length; i += 1) {
    i21244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i21245[i + 0]) );
  }
  i21242.collisionMatrix = i21244
  return i21242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i21248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i21249 = data
  i21248.enabled = !!i21249[0]
  i21248.layerId = i21249[1]
  i21248.otherLayerId = i21249[2]
  return i21248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i21250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i21251 = data
  request.r(i21251[0], i21251[1], 0, i21250, 'material')
  i21250.gravity = new pc.Vec2( i21251[2], i21251[3] )
  i21250.positionIterations = i21251[4]
  i21250.velocityIterations = i21251[5]
  i21250.velocityThreshold = i21251[6]
  i21250.maxLinearCorrection = i21251[7]
  i21250.maxAngularCorrection = i21251[8]
  i21250.maxTranslationSpeed = i21251[9]
  i21250.maxRotationSpeed = i21251[10]
  i21250.baumgarteScale = i21251[11]
  i21250.baumgarteTOIScale = i21251[12]
  i21250.timeToSleep = i21251[13]
  i21250.linearSleepTolerance = i21251[14]
  i21250.angularSleepTolerance = i21251[15]
  i21250.defaultContactOffset = i21251[16]
  i21250.autoSimulation = !!i21251[17]
  i21250.queriesHitTriggers = !!i21251[18]
  i21250.queriesStartInColliders = !!i21251[19]
  i21250.callbacksOnDisable = !!i21251[20]
  i21250.reuseCollisionCallbacks = !!i21251[21]
  i21250.autoSyncTransforms = !!i21251[22]
  var i21253 = i21251[23]
  var i21252 = []
  for(var i = 0; i < i21253.length; i += 1) {
    i21252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i21253[i + 0]) );
  }
  i21250.collisionMatrix = i21252
  return i21250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i21256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i21257 = data
  i21256.enabled = !!i21257[0]
  i21256.layerId = i21257[1]
  i21256.otherLayerId = i21257[2]
  return i21256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i21258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i21259 = data
  var i21261 = i21259[0]
  var i21260 = []
  for(var i = 0; i < i21261.length; i += 1) {
    i21260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i21261[i + 0]) );
  }
  i21258.qualityLevels = i21260
  var i21263 = i21259[1]
  var i21262 = []
  for(var i = 0; i < i21263.length; i += 1) {
    i21262.push( i21263[i + 0] );
  }
  i21258.names = i21262
  i21258.shadows = i21259[2]
  i21258.anisotropicFiltering = i21259[3]
  i21258.antiAliasing = i21259[4]
  i21258.lodBias = i21259[5]
  i21258.shadowCascades = i21259[6]
  i21258.shadowDistance = i21259[7]
  i21258.shadowmaskMode = i21259[8]
  i21258.shadowProjection = i21259[9]
  i21258.shadowResolution = i21259[10]
  i21258.softParticles = !!i21259[11]
  i21258.softVegetation = !!i21259[12]
  i21258.activeColorSpace = i21259[13]
  i21258.desiredColorSpace = i21259[14]
  i21258.masterTextureLimit = i21259[15]
  i21258.maxQueuedFrames = i21259[16]
  i21258.particleRaycastBudget = i21259[17]
  i21258.pixelLightCount = i21259[18]
  i21258.realtimeReflectionProbes = !!i21259[19]
  i21258.shadowCascade2Split = i21259[20]
  i21258.shadowCascade4Split = new pc.Vec3( i21259[21], i21259[22], i21259[23] )
  i21258.streamingMipmapsActive = !!i21259[24]
  i21258.vSyncCount = i21259[25]
  i21258.asyncUploadBufferSize = i21259[26]
  i21258.asyncUploadTimeSlice = i21259[27]
  i21258.billboardsFaceCameraPosition = !!i21259[28]
  i21258.shadowNearPlaneOffset = i21259[29]
  i21258.streamingMipmapsMemoryBudget = i21259[30]
  i21258.maximumLODLevel = i21259[31]
  i21258.streamingMipmapsAddAllCameras = !!i21259[32]
  i21258.streamingMipmapsMaxLevelReduction = i21259[33]
  i21258.streamingMipmapsRenderersPerFrame = i21259[34]
  i21258.resolutionScalingFixedDPIFactor = i21259[35]
  i21258.streamingMipmapsMaxFileIORequests = i21259[36]
  i21258.currentQualityLevel = i21259[37]
  return i21258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i21268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i21269 = data
  i21268.weight = i21269[0]
  i21268.vertices = i21269[1]
  i21268.normals = i21269[2]
  i21268.tangents = i21269[3]
  return i21268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i21272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i21273 = data
  i21272.mode = i21273[0]
  i21272.parameter = i21273[1]
  i21272.threshold = i21273[2]
  return i21272
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i21274 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i21275 = data
  i21274.xPlacement = i21275[0]
  i21274.yPlacement = i21275[1]
  i21274.xAdvance = i21275[2]
  i21274.yAdvance = i21275[3]
  return i21274
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i21276 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i21277 = data
  i21276.m_GlyphIndex = i21277[0]
  i21276.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i21277[1], i21276.m_GlyphValueRecord)
  return i21276
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i21278 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i21279 = data
  i21278.m_XPlacement = i21279[0]
  i21278.m_YPlacement = i21279[1]
  i21278.m_XAdvance = i21279[2]
  i21278.m_YAdvance = i21279[3]
  return i21278
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"74":[27],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[27],"98":[99],"100":[101],"102":[101],"29":[0],"20":[17],"103":[17],"104":[17],"105":[27],"106":[107],"108":[0],"109":[1,0],"110":[99],"43":[1,0],"111":[51,99],"112":[99],"113":[99,114],"115":[76],"116":[84],"117":[107],"118":[119],"120":[50],"121":[27],"122":[123],"124":[0],"125":[99,0],"5":[0,1],"126":[0],"127":[1,0],"128":[99],"129":[1,0],"130":[0],"131":[132],"133":[132],"134":[132],"135":[0],"136":[0],"31":[29],"4":[1,0],"137":[0],"30":[29],"138":[0],"46":[0],"44":[0],"139":[0],"140":[0],"141":[0],"142":[0],"47":[0],"143":[0],"144":[1,0],"145":[0],"146":[0],"147":[0],"148":[0],"149":[1,0],"150":[0],"151":[54],"152":[54],"55":[54],"153":[54],"154":[27],"155":[27]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","Item","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.Sprite","ItemData","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","TileCell","TileData","Tile","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","CartoonFX.CFXR_Effect","UnityEngine.Light","AnimatedTile","UnityEngine.GameObject","UnityEngine.TrailRenderer","StateEvents","PositionTracking","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BasicFade","UnityEngine.CanvasGroup","UnityEngine.UI.Button","AppearAnimation","PlayerGuide","GameManager","RectAnimator","TileManager","DynamitePowerup","DynamiteEffect","SpecialTileManager","Spine.Unity.SkeletonGraphic","UnityEngine.UI.HorizontalLayoutGroup","UIMoveTo","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Mask","Spine.Unity.SkeletonDataAsset","AnimatedTileSpawner","UnityEngine.SpriteRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MergeHands","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AudioManager","AudioLibrary","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioClip","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CartoonFX.CFXR_EmissionBySurface","CartoonFX.CFXR_ParticleText","Kino.Bloom","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2023.1.0f1";

Deserializers.productName = "Piggy Kingdom - Renovation";

Deserializers.lunaInitializationTime = "09/29/2025 07:36:59";

Deserializers.lunaDaysRunning = "8.1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1938";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5475";

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

Deserializers.buildID = "65dc8294-4ae1-4d42-b8f6-564febf9e3b8";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

