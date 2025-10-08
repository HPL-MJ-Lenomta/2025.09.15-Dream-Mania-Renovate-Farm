var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i8610 = root || request.c( 'UnityEngine.JointSpring' )
  var i8611 = data
  i8610.spring = i8611[0]
  i8610.damper = i8611[1]
  i8610.targetPosition = i8611[2]
  return i8610
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i8612 = root || request.c( 'UnityEngine.JointMotor' )
  var i8613 = data
  i8612.m_TargetVelocity = i8613[0]
  i8612.m_Force = i8613[1]
  i8612.m_FreeSpin = i8613[2]
  return i8612
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i8614 = root || request.c( 'UnityEngine.JointLimits' )
  var i8615 = data
  i8614.m_Min = i8615[0]
  i8614.m_Max = i8615[1]
  i8614.m_Bounciness = i8615[2]
  i8614.m_BounceMinVelocity = i8615[3]
  i8614.m_ContactDistance = i8615[4]
  i8614.minBounce = i8615[5]
  i8614.maxBounce = i8615[6]
  return i8614
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i8616 = root || request.c( 'UnityEngine.JointDrive' )
  var i8617 = data
  i8616.m_PositionSpring = i8617[0]
  i8616.m_PositionDamper = i8617[1]
  i8616.m_MaximumForce = i8617[2]
  i8616.m_UseAcceleration = i8617[3]
  return i8616
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i8618 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i8619 = data
  i8618.m_Spring = i8619[0]
  i8618.m_Damper = i8619[1]
  return i8618
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i8620 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i8621 = data
  i8620.m_Limit = i8621[0]
  i8620.m_Bounciness = i8621[1]
  i8620.m_ContactDistance = i8621[2]
  return i8620
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i8622 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i8623 = data
  i8622.m_ExtremumSlip = i8623[0]
  i8622.m_ExtremumValue = i8623[1]
  i8622.m_AsymptoteSlip = i8623[2]
  i8622.m_AsymptoteValue = i8623[3]
  i8622.m_Stiffness = i8623[4]
  return i8622
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i8624 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i8625 = data
  i8624.m_LowerAngle = i8625[0]
  i8624.m_UpperAngle = i8625[1]
  return i8624
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i8626 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i8627 = data
  i8626.m_MotorSpeed = i8627[0]
  i8626.m_MaximumMotorTorque = i8627[1]
  return i8626
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i8628 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i8629 = data
  i8628.m_DampingRatio = i8629[0]
  i8628.m_Frequency = i8629[1]
  i8628.m_Angle = i8629[2]
  return i8628
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i8630 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i8631 = data
  i8630.m_LowerTranslation = i8631[0]
  i8630.m_UpperTranslation = i8631[1]
  return i8630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i8632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i8633 = data
  i8632.name = i8633[0]
  i8632.width = i8633[1]
  i8632.height = i8633[2]
  i8632.mipmapCount = i8633[3]
  i8632.anisoLevel = i8633[4]
  i8632.filterMode = i8633[5]
  i8632.hdr = !!i8633[6]
  i8632.format = i8633[7]
  i8632.wrapMode = i8633[8]
  i8632.alphaIsTransparency = !!i8633[9]
  i8632.alphaSource = i8633[10]
  i8632.graphicsFormat = i8633[11]
  i8632.sRGBTexture = !!i8633[12]
  i8632.desiredColorSpace = i8633[13]
  i8632.wrapU = i8633[14]
  i8632.wrapV = i8633[15]
  return i8632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i8634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i8635 = data
  i8634.pivot = new pc.Vec2( i8635[0], i8635[1] )
  i8634.anchorMin = new pc.Vec2( i8635[2], i8635[3] )
  i8634.anchorMax = new pc.Vec2( i8635[4], i8635[5] )
  i8634.sizeDelta = new pc.Vec2( i8635[6], i8635[7] )
  i8634.anchoredPosition3D = new pc.Vec3( i8635[8], i8635[9], i8635[10] )
  i8634.rotation = new pc.Quat(i8635[11], i8635[12], i8635[13], i8635[14])
  i8634.scale = new pc.Vec3( i8635[15], i8635[16], i8635[17] )
  return i8634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i8636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i8637 = data
  i8636.cullTransparentMesh = !!i8637[0]
  return i8636
}

Deserializers["Item"] = function (request, data, root) {
  var i8638 = root || request.c( 'Item' )
  var i8639 = data
  request.r(i8639[0], i8639[1], 0, i8638, 'itemImage')
  request.r(i8639[2], i8639[3], 0, i8638, 'collectItemImage')
  request.r(i8639[4], i8639[5], 0, i8638, 'itemCountText')
  i8638.ItemCount = i8639[6]
  request.r(i8639[7], i8639[8], 0, i8638, 'completeSprite')
  request.r(i8639[9], i8639[10], 0, i8638, 'data')
  request.r(i8639[11], i8639[12], 0, i8638, 'UIMovement')
  request.r(i8639[13], i8639[14], 0, i8638, 'FurnitureImage')
  i8638.portraitLocation = new pc.Vec2( i8639[15], i8639[16] )
  i8638.landscapeLocation = new pc.Vec2( i8639[17], i8639[18] )
  return i8638
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i8640 = root || request.c( 'UnityEngine.UI.Image' )
  var i8641 = data
  request.r(i8641[0], i8641[1], 0, i8640, 'm_Sprite')
  i8640.m_Type = i8641[2]
  i8640.m_PreserveAspect = !!i8641[3]
  i8640.m_FillCenter = !!i8641[4]
  i8640.m_FillMethod = i8641[5]
  i8640.m_FillAmount = i8641[6]
  i8640.m_FillClockwise = !!i8641[7]
  i8640.m_FillOrigin = i8641[8]
  i8640.m_UseSpriteMesh = !!i8641[9]
  i8640.m_PixelsPerUnitMultiplier = i8641[10]
  request.r(i8641[11], i8641[12], 0, i8640, 'm_Material')
  i8640.m_Maskable = !!i8641[13]
  i8640.m_Color = new pc.Color(i8641[14], i8641[15], i8641[16], i8641[17])
  i8640.m_RaycastTarget = !!i8641[18]
  i8640.m_RaycastPadding = new pc.Vec4( i8641[19], i8641[20], i8641[21], i8641[22] )
  return i8640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i8642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i8643 = data
  i8642.name = i8643[0]
  i8642.tagId = i8643[1]
  i8642.enabled = !!i8643[2]
  i8642.isStatic = !!i8643[3]
  i8642.layer = i8643[4]
  return i8642
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i8644 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i8645 = data
  i8644.m_hasFontAssetChanged = !!i8645[0]
  request.r(i8645[1], i8645[2], 0, i8644, 'm_baseMaterial')
  i8644.m_maskOffset = new pc.Vec4( i8645[3], i8645[4], i8645[5], i8645[6] )
  i8644.m_text = i8645[7]
  i8644.m_isRightToLeft = !!i8645[8]
  request.r(i8645[9], i8645[10], 0, i8644, 'm_fontAsset')
  request.r(i8645[11], i8645[12], 0, i8644, 'm_sharedMaterial')
  var i8647 = i8645[13]
  var i8646 = []
  for(var i = 0; i < i8647.length; i += 2) {
  request.r(i8647[i + 0], i8647[i + 1], 2, i8646, '')
  }
  i8644.m_fontSharedMaterials = i8646
  request.r(i8645[14], i8645[15], 0, i8644, 'm_fontMaterial')
  var i8649 = i8645[16]
  var i8648 = []
  for(var i = 0; i < i8649.length; i += 2) {
  request.r(i8649[i + 0], i8649[i + 1], 2, i8648, '')
  }
  i8644.m_fontMaterials = i8648
  i8644.m_fontColor32 = UnityEngine.Color32.ConstructColor(i8645[17], i8645[18], i8645[19], i8645[20])
  i8644.m_fontColor = new pc.Color(i8645[21], i8645[22], i8645[23], i8645[24])
  i8644.m_enableVertexGradient = !!i8645[25]
  i8644.m_colorMode = i8645[26]
  i8644.m_fontColorGradient = request.d('TMPro.VertexGradient', i8645[27], i8644.m_fontColorGradient)
  request.r(i8645[28], i8645[29], 0, i8644, 'm_fontColorGradientPreset')
  request.r(i8645[30], i8645[31], 0, i8644, 'm_spriteAsset')
  i8644.m_tintAllSprites = !!i8645[32]
  request.r(i8645[33], i8645[34], 0, i8644, 'm_StyleSheet')
  i8644.m_TextStyleHashCode = i8645[35]
  i8644.m_overrideHtmlColors = !!i8645[36]
  i8644.m_faceColor = UnityEngine.Color32.ConstructColor(i8645[37], i8645[38], i8645[39], i8645[40])
  i8644.m_fontSize = i8645[41]
  i8644.m_fontSizeBase = i8645[42]
  i8644.m_fontWeight = i8645[43]
  i8644.m_enableAutoSizing = !!i8645[44]
  i8644.m_fontSizeMin = i8645[45]
  i8644.m_fontSizeMax = i8645[46]
  i8644.m_fontStyle = i8645[47]
  i8644.m_HorizontalAlignment = i8645[48]
  i8644.m_VerticalAlignment = i8645[49]
  i8644.m_textAlignment = i8645[50]
  i8644.m_characterSpacing = i8645[51]
  i8644.m_wordSpacing = i8645[52]
  i8644.m_lineSpacing = i8645[53]
  i8644.m_lineSpacingMax = i8645[54]
  i8644.m_paragraphSpacing = i8645[55]
  i8644.m_charWidthMaxAdj = i8645[56]
  i8644.m_enableWordWrapping = !!i8645[57]
  i8644.m_wordWrappingRatios = i8645[58]
  i8644.m_overflowMode = i8645[59]
  request.r(i8645[60], i8645[61], 0, i8644, 'm_linkedTextComponent')
  request.r(i8645[62], i8645[63], 0, i8644, 'parentLinkedComponent')
  i8644.m_enableKerning = !!i8645[64]
  i8644.m_enableExtraPadding = !!i8645[65]
  i8644.checkPaddingRequired = !!i8645[66]
  i8644.m_isRichText = !!i8645[67]
  i8644.m_parseCtrlCharacters = !!i8645[68]
  i8644.m_isOrthographic = !!i8645[69]
  i8644.m_isCullingEnabled = !!i8645[70]
  i8644.m_horizontalMapping = i8645[71]
  i8644.m_verticalMapping = i8645[72]
  i8644.m_uvLineOffset = i8645[73]
  i8644.m_geometrySortingOrder = i8645[74]
  i8644.m_IsTextObjectScaleStatic = !!i8645[75]
  i8644.m_VertexBufferAutoSizeReduction = !!i8645[76]
  i8644.m_useMaxVisibleDescender = !!i8645[77]
  i8644.m_pageToDisplay = i8645[78]
  i8644.m_margin = new pc.Vec4( i8645[79], i8645[80], i8645[81], i8645[82] )
  i8644.m_isUsingLegacyAnimationComponent = !!i8645[83]
  i8644.m_isVolumetricText = !!i8645[84]
  request.r(i8645[85], i8645[86], 0, i8644, 'm_Material')
  i8644.m_Maskable = !!i8645[87]
  i8644.m_Color = new pc.Color(i8645[88], i8645[89], i8645[90], i8645[91])
  i8644.m_RaycastTarget = !!i8645[92]
  i8644.m_RaycastPadding = new pc.Vec4( i8645[93], i8645[94], i8645[95], i8645[96] )
  return i8644
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i8652 = root || request.c( 'TMPro.VertexGradient' )
  var i8653 = data
  i8652.topLeft = new pc.Color(i8653[0], i8653[1], i8653[2], i8653[3])
  i8652.topRight = new pc.Color(i8653[4], i8653[5], i8653[6], i8653[7])
  i8652.bottomLeft = new pc.Color(i8653[8], i8653[9], i8653[10], i8653[11])
  i8652.bottomRight = new pc.Color(i8653[12], i8653[13], i8653[14], i8653[15])
  return i8652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i8654 = root || new pc.UnityMaterial()
  var i8655 = data
  i8654.name = i8655[0]
  request.r(i8655[1], i8655[2], 0, i8654, 'shader')
  i8654.renderQueue = i8655[3]
  i8654.enableInstancing = !!i8655[4]
  var i8657 = i8655[5]
  var i8656 = []
  for(var i = 0; i < i8657.length; i += 1) {
    i8656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i8657[i + 0]) );
  }
  i8654.floatParameters = i8656
  var i8659 = i8655[6]
  var i8658 = []
  for(var i = 0; i < i8659.length; i += 1) {
    i8658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i8659[i + 0]) );
  }
  i8654.colorParameters = i8658
  var i8661 = i8655[7]
  var i8660 = []
  for(var i = 0; i < i8661.length; i += 1) {
    i8660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i8661[i + 0]) );
  }
  i8654.vectorParameters = i8660
  var i8663 = i8655[8]
  var i8662 = []
  for(var i = 0; i < i8663.length; i += 1) {
    i8662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i8663[i + 0]) );
  }
  i8654.textureParameters = i8662
  var i8665 = i8655[9]
  var i8664 = []
  for(var i = 0; i < i8665.length; i += 1) {
    i8664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i8665[i + 0]) );
  }
  i8654.materialFlags = i8664
  return i8654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i8668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i8669 = data
  i8668.name = i8669[0]
  i8668.value = i8669[1]
  return i8668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i8672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i8673 = data
  i8672.name = i8673[0]
  i8672.value = new pc.Color(i8673[1], i8673[2], i8673[3], i8673[4])
  return i8672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i8676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i8677 = data
  i8676.name = i8677[0]
  i8676.value = new pc.Vec4( i8677[1], i8677[2], i8677[3], i8677[4] )
  return i8676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i8680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i8681 = data
  i8680.name = i8681[0]
  request.r(i8681[1], i8681[2], 0, i8680, 'value')
  return i8680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i8684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i8685 = data
  i8684.name = i8685[0]
  i8684.enabled = !!i8685[1]
  return i8684
}

Deserializers["TileCell"] = function (request, data, root) {
  var i8686 = root || request.c( 'TileCell' )
  var i8687 = data
  i8686.coordinate = new pc.Vec2( i8687[0], i8687[1] )
  i8686.TileBreakEvent = request.d('UnityEngine.Events.UnityEvent', i8687[2], i8686.TileBreakEvent)
  request.r(i8687[3], i8687[4], 0, i8686, 'tileData')
  request.r(i8687[5], i8687[6], 0, i8686, 'tile')
  return i8686
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i8688 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i8689 = data
  i8688.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8689[0], i8688.m_PersistentCalls)
  return i8688
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i8690 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i8691 = data
  var i8693 = i8691[0]
  var i8692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i8693.length; i += 1) {
    i8692.add(request.d('UnityEngine.Events.PersistentCall', i8693[i + 0]));
  }
  i8690.m_Calls = i8692
  return i8690
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i8696 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i8697 = data
  request.r(i8697[0], i8697[1], 0, i8696, 'm_Target')
  i8696.m_TargetAssemblyTypeName = i8697[2]
  i8696.m_MethodName = i8697[3]
  i8696.m_Mode = i8697[4]
  i8696.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i8697[5], i8696.m_Arguments)
  i8696.m_CallState = i8697[6]
  return i8696
}

Deserializers["Tile"] = function (request, data, root) {
  var i8698 = root || request.c( 'Tile' )
  var i8699 = data
  request.r(i8699[0], i8699[1], 0, i8698, 'itemImage')
  request.r(i8699[2], i8699[3], 0, i8698, 'tileData')
  i8698.MovementMagnitude = i8699[4]
  i8698.MovementDuration = i8699[5]
  return i8698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i8700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i8701 = data
  i8700.position = new pc.Vec3( i8701[0], i8701[1], i8701[2] )
  i8700.scale = new pc.Vec3( i8701[3], i8701[4], i8701[5] )
  i8700.rotation = new pc.Quat(i8701[6], i8701[7], i8701[8], i8701[9])
  return i8700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i8702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i8703 = data
  i8702.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i8703[0], i8702.main)
  i8702.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i8703[1], i8702.colorBySpeed)
  i8702.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i8703[2], i8702.colorOverLifetime)
  i8702.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i8703[3], i8702.emission)
  i8702.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i8703[4], i8702.rotationBySpeed)
  i8702.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i8703[5], i8702.rotationOverLifetime)
  i8702.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i8703[6], i8702.shape)
  i8702.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i8703[7], i8702.sizeBySpeed)
  i8702.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i8703[8], i8702.sizeOverLifetime)
  i8702.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i8703[9], i8702.textureSheetAnimation)
  i8702.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i8703[10], i8702.velocityOverLifetime)
  i8702.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i8703[11], i8702.noise)
  i8702.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i8703[12], i8702.inheritVelocity)
  i8702.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i8703[13], i8702.forceOverLifetime)
  i8702.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i8703[14], i8702.limitVelocityOverLifetime)
  i8702.useAutoRandomSeed = !!i8703[15]
  i8702.randomSeed = i8703[16]
  return i8702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i8704 = root || new pc.ParticleSystemMain()
  var i8705 = data
  i8704.duration = i8705[0]
  i8704.loop = !!i8705[1]
  i8704.prewarm = !!i8705[2]
  i8704.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8705[3], i8704.startDelay)
  i8704.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8705[4], i8704.startLifetime)
  i8704.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8705[5], i8704.startSpeed)
  i8704.startSize3D = !!i8705[6]
  i8704.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8705[7], i8704.startSizeX)
  i8704.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8705[8], i8704.startSizeY)
  i8704.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8705[9], i8704.startSizeZ)
  i8704.startRotation3D = !!i8705[10]
  i8704.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8705[11], i8704.startRotationX)
  i8704.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8705[12], i8704.startRotationY)
  i8704.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8705[13], i8704.startRotationZ)
  i8704.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8705[14], i8704.startColor)
  i8704.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8705[15], i8704.gravityModifier)
  i8704.simulationSpace = i8705[16]
  request.r(i8705[17], i8705[18], 0, i8704, 'customSimulationSpace')
  i8704.simulationSpeed = i8705[19]
  i8704.useUnscaledTime = !!i8705[20]
  i8704.scalingMode = i8705[21]
  i8704.playOnAwake = !!i8705[22]
  i8704.maxParticles = i8705[23]
  i8704.emitterVelocityMode = i8705[24]
  i8704.stopAction = i8705[25]
  return i8704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i8706 = root || new pc.MinMaxCurve()
  var i8707 = data
  i8706.mode = i8707[0]
  i8706.curveMin = new pc.AnimationCurve( { keys_flow: i8707[1] } )
  i8706.curveMax = new pc.AnimationCurve( { keys_flow: i8707[2] } )
  i8706.curveMultiplier = i8707[3]
  i8706.constantMin = i8707[4]
  i8706.constantMax = i8707[5]
  return i8706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i8708 = root || new pc.MinMaxGradient()
  var i8709 = data
  i8708.mode = i8709[0]
  i8708.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8709[1], i8708.gradientMin)
  i8708.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8709[2], i8708.gradientMax)
  i8708.colorMin = new pc.Color(i8709[3], i8709[4], i8709[5], i8709[6])
  i8708.colorMax = new pc.Color(i8709[7], i8709[8], i8709[9], i8709[10])
  return i8708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i8710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i8711 = data
  i8710.mode = i8711[0]
  var i8713 = i8711[1]
  var i8712 = []
  for(var i = 0; i < i8713.length; i += 1) {
    i8712.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i8713[i + 0]) );
  }
  i8710.colorKeys = i8712
  var i8715 = i8711[2]
  var i8714 = []
  for(var i = 0; i < i8715.length; i += 1) {
    i8714.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i8715[i + 0]) );
  }
  i8710.alphaKeys = i8714
  return i8710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i8716 = root || new pc.ParticleSystemColorBySpeed()
  var i8717 = data
  i8716.enabled = !!i8717[0]
  i8716.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8717[1], i8716.color)
  i8716.range = new pc.Vec2( i8717[2], i8717[3] )
  return i8716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i8720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i8721 = data
  i8720.color = new pc.Color(i8721[0], i8721[1], i8721[2], i8721[3])
  i8720.time = i8721[4]
  return i8720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i8724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i8725 = data
  i8724.alpha = i8725[0]
  i8724.time = i8725[1]
  return i8724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i8726 = root || new pc.ParticleSystemColorOverLifetime()
  var i8727 = data
  i8726.enabled = !!i8727[0]
  i8726.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8727[1], i8726.color)
  return i8726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i8728 = root || new pc.ParticleSystemEmitter()
  var i8729 = data
  i8728.enabled = !!i8729[0]
  i8728.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8729[1], i8728.rateOverTime)
  i8728.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8729[2], i8728.rateOverDistance)
  var i8731 = i8729[3]
  var i8730 = []
  for(var i = 0; i < i8731.length; i += 1) {
    i8730.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i8731[i + 0]) );
  }
  i8728.bursts = i8730
  return i8728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i8734 = root || new pc.ParticleSystemBurst()
  var i8735 = data
  i8734.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8735[0], i8734.count)
  i8734.cycleCount = i8735[1]
  i8734.minCount = i8735[2]
  i8734.maxCount = i8735[3]
  i8734.repeatInterval = i8735[4]
  i8734.time = i8735[5]
  return i8734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i8736 = root || new pc.ParticleSystemRotationBySpeed()
  var i8737 = data
  i8736.enabled = !!i8737[0]
  i8736.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8737[1], i8736.x)
  i8736.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8737[2], i8736.y)
  i8736.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8737[3], i8736.z)
  i8736.separateAxes = !!i8737[4]
  i8736.range = new pc.Vec2( i8737[5], i8737[6] )
  return i8736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i8738 = root || new pc.ParticleSystemRotationOverLifetime()
  var i8739 = data
  i8738.enabled = !!i8739[0]
  i8738.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8739[1], i8738.x)
  i8738.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8739[2], i8738.y)
  i8738.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8739[3], i8738.z)
  i8738.separateAxes = !!i8739[4]
  return i8738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i8740 = root || new pc.ParticleSystemShape()
  var i8741 = data
  i8740.enabled = !!i8741[0]
  i8740.shapeType = i8741[1]
  i8740.randomDirectionAmount = i8741[2]
  i8740.sphericalDirectionAmount = i8741[3]
  i8740.randomPositionAmount = i8741[4]
  i8740.alignToDirection = !!i8741[5]
  i8740.radius = i8741[6]
  i8740.radiusMode = i8741[7]
  i8740.radiusSpread = i8741[8]
  i8740.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8741[9], i8740.radiusSpeed)
  i8740.radiusThickness = i8741[10]
  i8740.angle = i8741[11]
  i8740.length = i8741[12]
  i8740.boxThickness = new pc.Vec3( i8741[13], i8741[14], i8741[15] )
  i8740.meshShapeType = i8741[16]
  request.r(i8741[17], i8741[18], 0, i8740, 'mesh')
  request.r(i8741[19], i8741[20], 0, i8740, 'meshRenderer')
  request.r(i8741[21], i8741[22], 0, i8740, 'skinnedMeshRenderer')
  i8740.useMeshMaterialIndex = !!i8741[23]
  i8740.meshMaterialIndex = i8741[24]
  i8740.useMeshColors = !!i8741[25]
  i8740.normalOffset = i8741[26]
  i8740.arc = i8741[27]
  i8740.arcMode = i8741[28]
  i8740.arcSpread = i8741[29]
  i8740.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8741[30], i8740.arcSpeed)
  i8740.donutRadius = i8741[31]
  i8740.position = new pc.Vec3( i8741[32], i8741[33], i8741[34] )
  i8740.rotation = new pc.Vec3( i8741[35], i8741[36], i8741[37] )
  i8740.scale = new pc.Vec3( i8741[38], i8741[39], i8741[40] )
  return i8740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i8742 = root || new pc.ParticleSystemSizeBySpeed()
  var i8743 = data
  i8742.enabled = !!i8743[0]
  i8742.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8743[1], i8742.x)
  i8742.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8743[2], i8742.y)
  i8742.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8743[3], i8742.z)
  i8742.separateAxes = !!i8743[4]
  i8742.range = new pc.Vec2( i8743[5], i8743[6] )
  return i8742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i8744 = root || new pc.ParticleSystemSizeOverLifetime()
  var i8745 = data
  i8744.enabled = !!i8745[0]
  i8744.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8745[1], i8744.x)
  i8744.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8745[2], i8744.y)
  i8744.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8745[3], i8744.z)
  i8744.separateAxes = !!i8745[4]
  return i8744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i8746 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i8747 = data
  i8746.enabled = !!i8747[0]
  i8746.mode = i8747[1]
  i8746.animation = i8747[2]
  i8746.numTilesX = i8747[3]
  i8746.numTilesY = i8747[4]
  i8746.useRandomRow = !!i8747[5]
  i8746.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8747[6], i8746.frameOverTime)
  i8746.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8747[7], i8746.startFrame)
  i8746.cycleCount = i8747[8]
  i8746.rowIndex = i8747[9]
  i8746.flipU = i8747[10]
  i8746.flipV = i8747[11]
  i8746.spriteCount = i8747[12]
  var i8749 = i8747[13]
  var i8748 = []
  for(var i = 0; i < i8749.length; i += 2) {
  request.r(i8749[i + 0], i8749[i + 1], 2, i8748, '')
  }
  i8746.sprites = i8748
  return i8746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i8752 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i8753 = data
  i8752.enabled = !!i8753[0]
  i8752.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8753[1], i8752.x)
  i8752.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8753[2], i8752.y)
  i8752.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8753[3], i8752.z)
  i8752.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8753[4], i8752.radial)
  i8752.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8753[5], i8752.speedModifier)
  i8752.space = i8753[6]
  i8752.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8753[7], i8752.orbitalX)
  i8752.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8753[8], i8752.orbitalY)
  i8752.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8753[9], i8752.orbitalZ)
  i8752.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8753[10], i8752.orbitalOffsetX)
  i8752.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8753[11], i8752.orbitalOffsetY)
  i8752.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8753[12], i8752.orbitalOffsetZ)
  return i8752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i8754 = root || new pc.ParticleSystemNoise()
  var i8755 = data
  i8754.enabled = !!i8755[0]
  i8754.separateAxes = !!i8755[1]
  i8754.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8755[2], i8754.strengthX)
  i8754.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8755[3], i8754.strengthY)
  i8754.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8755[4], i8754.strengthZ)
  i8754.frequency = i8755[5]
  i8754.damping = !!i8755[6]
  i8754.octaveCount = i8755[7]
  i8754.octaveMultiplier = i8755[8]
  i8754.octaveScale = i8755[9]
  i8754.quality = i8755[10]
  i8754.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8755[11], i8754.scrollSpeed)
  i8754.scrollSpeedMultiplier = i8755[12]
  i8754.remapEnabled = !!i8755[13]
  i8754.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8755[14], i8754.remapX)
  i8754.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8755[15], i8754.remapY)
  i8754.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8755[16], i8754.remapZ)
  i8754.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8755[17], i8754.positionAmount)
  i8754.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8755[18], i8754.rotationAmount)
  i8754.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8755[19], i8754.sizeAmount)
  return i8754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i8756 = root || new pc.ParticleSystemInheritVelocity()
  var i8757 = data
  i8756.enabled = !!i8757[0]
  i8756.mode = i8757[1]
  i8756.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8757[2], i8756.curve)
  return i8756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i8758 = root || new pc.ParticleSystemForceOverLifetime()
  var i8759 = data
  i8758.enabled = !!i8759[0]
  i8758.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8759[1], i8758.x)
  i8758.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8759[2], i8758.y)
  i8758.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8759[3], i8758.z)
  i8758.space = i8759[4]
  i8758.randomized = !!i8759[5]
  return i8758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i8760 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i8761 = data
  i8760.enabled = !!i8761[0]
  i8760.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8761[1], i8760.limit)
  i8760.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8761[2], i8760.limitX)
  i8760.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8761[3], i8760.limitY)
  i8760.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8761[4], i8760.limitZ)
  i8760.dampen = i8761[5]
  i8760.separateAxes = !!i8761[6]
  i8760.space = i8761[7]
  i8760.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8761[8], i8760.drag)
  i8760.multiplyDragByParticleSize = !!i8761[9]
  i8760.multiplyDragByParticleVelocity = !!i8761[10]
  return i8760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i8762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i8763 = data
  i8762.enabled = !!i8763[0]
  request.r(i8763[1], i8763[2], 0, i8762, 'sharedMaterial')
  var i8765 = i8763[3]
  var i8764 = []
  for(var i = 0; i < i8765.length; i += 2) {
  request.r(i8765[i + 0], i8765[i + 1], 2, i8764, '')
  }
  i8762.sharedMaterials = i8764
  i8762.receiveShadows = !!i8763[4]
  i8762.shadowCastingMode = i8763[5]
  i8762.sortingLayerID = i8763[6]
  i8762.sortingOrder = i8763[7]
  i8762.lightmapIndex = i8763[8]
  i8762.lightmapSceneIndex = i8763[9]
  i8762.lightmapScaleOffset = new pc.Vec4( i8763[10], i8763[11], i8763[12], i8763[13] )
  i8762.lightProbeUsage = i8763[14]
  i8762.reflectionProbeUsage = i8763[15]
  request.r(i8763[16], i8763[17], 0, i8762, 'mesh')
  i8762.meshCount = i8763[18]
  i8762.activeVertexStreamsCount = i8763[19]
  i8762.alignment = i8763[20]
  i8762.renderMode = i8763[21]
  i8762.sortMode = i8763[22]
  i8762.lengthScale = i8763[23]
  i8762.velocityScale = i8763[24]
  i8762.cameraVelocityScale = i8763[25]
  i8762.normalDirection = i8763[26]
  i8762.sortingFudge = i8763[27]
  i8762.minParticleSize = i8763[28]
  i8762.maxParticleSize = i8763[29]
  i8762.pivot = new pc.Vec3( i8763[30], i8763[31], i8763[32] )
  request.r(i8763[33], i8763[34], 0, i8762, 'trailMaterial')
  return i8762
}

Deserializers["CartoonFX.CFXR_Effect"] = function (request, data, root) {
  var i8766 = root || request.c( 'CartoonFX.CFXR_Effect' )
  var i8767 = data
  i8766.clearBehavior = i8767[0]
  i8766.cameraShake = request.d('CartoonFX.CFXR_Effect+CameraShake', i8767[1], i8766.cameraShake)
  var i8769 = i8767[2]
  var i8768 = []
  for(var i = 0; i < i8769.length; i += 1) {
    i8768.push( request.d('CartoonFX.CFXR_Effect+AnimatedLight', i8769[i + 0]) );
  }
  i8766.animatedLights = i8768
  request.r(i8767[3], i8767[4], 0, i8766, 'fadeOutReference')
  return i8766
}

Deserializers["CartoonFX.CFXR_Effect+CameraShake"] = function (request, data, root) {
  var i8770 = root || request.c( 'CartoonFX.CFXR_Effect+CameraShake' )
  var i8771 = data
  i8770.camEnabled = !!i8771[0]
  i8770.useMainCamera = !!i8771[1]
  var i8773 = i8771[2]
  var i8772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i8773.length; i += 2) {
  request.r(i8773[i + 0], i8773[i + 1], 1, i8772, '')
  }
  i8770.cameras = i8772
  i8770.delay = i8771[3]
  i8770.duration = i8771[4]
  i8770.shakeSpace = i8771[5]
  i8770.shakeStrength = new pc.Vec3( i8771[6], i8771[7], i8771[8] )
  i8770.shakeCurve = new pc.AnimationCurve( { keys_flow: i8771[9] } )
  i8770.shakesDelay = i8771[10]
  return i8770
}

Deserializers["CartoonFX.CFXR_Effect+AnimatedLight"] = function (request, data, root) {
  var i8778 = root || request.c( 'CartoonFX.CFXR_Effect+AnimatedLight' )
  var i8779 = data
  request.r(i8779[0], i8779[1], 0, i8778, 'light')
  i8778.loop = !!i8779[2]
  i8778.animateIntensity = !!i8779[3]
  i8778.intensityStart = i8779[4]
  i8778.intensityEnd = i8779[5]
  i8778.intensityDuration = i8779[6]
  i8778.intensityCurve = new pc.AnimationCurve( { keys_flow: i8779[7] } )
  i8778.perlinIntensity = !!i8779[8]
  i8778.perlinIntensitySpeed = i8779[9]
  i8778.fadeIn = !!i8779[10]
  i8778.fadeInDuration = i8779[11]
  i8778.fadeOut = !!i8779[12]
  i8778.fadeOutDuration = i8779[13]
  i8778.animateRange = !!i8779[14]
  i8778.rangeStart = i8779[15]
  i8778.rangeEnd = i8779[16]
  i8778.rangeDuration = i8779[17]
  i8778.rangeCurve = new pc.AnimationCurve( { keys_flow: i8779[18] } )
  i8778.perlinRange = !!i8779[19]
  i8778.perlinRangeSpeed = i8779[20]
  i8778.animateColor = !!i8779[21]
  i8778.colorGradient = i8779[22] ? new pc.ColorGradient(i8779[22][0], i8779[22][1], i8779[22][2]) : null
  i8778.colorDuration = i8779[23]
  i8778.colorCurve = new pc.AnimationCurve( { keys_flow: i8779[24] } )
  i8778.perlinColor = !!i8779[25]
  i8778.perlinColorSpeed = i8779[26]
  return i8778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i8780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i8781 = data
  i8780.enabled = !!i8781[0]
  i8780.type = i8781[1]
  i8780.color = new pc.Color(i8781[2], i8781[3], i8781[4], i8781[5])
  i8780.cullingMask = i8781[6]
  i8780.intensity = i8781[7]
  i8780.range = i8781[8]
  i8780.spotAngle = i8781[9]
  i8780.shadows = i8781[10]
  i8780.shadowNormalBias = i8781[11]
  i8780.shadowBias = i8781[12]
  i8780.shadowStrength = i8781[13]
  i8780.shadowResolution = i8781[14]
  i8780.lightmapBakeType = i8781[15]
  i8780.renderMode = i8781[16]
  request.r(i8781[17], i8781[18], 0, i8780, 'cookie')
  i8780.cookieSize = i8781[19]
  return i8780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i8782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i8783 = data
  i8782.name = i8783[0]
  i8782.halfPrecision = !!i8783[1]
  i8782.useUInt32IndexFormat = !!i8783[2]
  i8782.vertexCount = i8783[3]
  i8782.aabb = i8783[4]
  var i8785 = i8783[5]
  var i8784 = []
  for(var i = 0; i < i8785.length; i += 1) {
    i8784.push( !!i8785[i + 0] );
  }
  i8782.streams = i8784
  i8782.vertices = i8783[6]
  var i8787 = i8783[7]
  var i8786 = []
  for(var i = 0; i < i8787.length; i += 1) {
    i8786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i8787[i + 0]) );
  }
  i8782.subMeshes = i8786
  var i8789 = i8783[8]
  var i8788 = []
  for(var i = 0; i < i8789.length; i += 16) {
    i8788.push( new pc.Mat4().setData(i8789[i + 0], i8789[i + 1], i8789[i + 2], i8789[i + 3],  i8789[i + 4], i8789[i + 5], i8789[i + 6], i8789[i + 7],  i8789[i + 8], i8789[i + 9], i8789[i + 10], i8789[i + 11],  i8789[i + 12], i8789[i + 13], i8789[i + 14], i8789[i + 15]) );
  }
  i8782.bindposes = i8788
  var i8791 = i8783[9]
  var i8790 = []
  for(var i = 0; i < i8791.length; i += 1) {
    i8790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i8791[i + 0]) );
  }
  i8782.blendShapes = i8790
  return i8782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i8796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i8797 = data
  i8796.triangles = i8797[0]
  return i8796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i8802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i8803 = data
  i8802.name = i8803[0]
  var i8805 = i8803[1]
  var i8804 = []
  for(var i = 0; i < i8805.length; i += 1) {
    i8804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i8805[i + 0]) );
  }
  i8802.frames = i8804
  return i8802
}

Deserializers["AnimatedTile"] = function (request, data, root) {
  var i8806 = root || request.c( 'AnimatedTile' )
  var i8807 = data
  i8806.Duration = i8807[0]
  request.r(i8807[1], i8807[2], 0, i8806, 'tileData')
  var i8809 = i8807[3]
  var i8808 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i8809.length; i += 3) {
    i8808.add(new pc.Vec3( i8809[i + 0], i8809[i + 1], i8809[i + 2] ));
  }
  i8806.targetPos = i8808
  var i8811 = i8807[4]
  var i8810 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i8811.length; i += 3) {
    i8810.add(new pc.Vec3( i8811[i + 0], i8811[i + 1], i8811[i + 2] ));
  }
  i8806.targetPosPortrait = i8810
  var i8813 = i8807[5]
  var i8812 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i8813.length; i += 3) {
    i8812.add(new pc.Vec3( i8813[i + 0], i8813[i + 1], i8813[i + 2] ));
  }
  i8806.targetPosLandscape = i8812
  var i8815 = i8807[6]
  var i8814 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i8815.length; i += 1) {
    i8814.add(i8815[i + 0]);
  }
  i8806.targets = i8814
  request.r(i8807[7], i8807[8], 0, i8806, 'image')
  var i8817 = i8807[9]
  var i8816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.ParticleSystem')))
  for(var i = 0; i < i8817.length; i += 2) {
  request.r(i8817[i + 0], i8817[i + 1], 1, i8816, '')
  }
  i8806.vfxParticles = i8816
  request.r(i8807[10], i8807[11], 0, i8806, 'trailVFXPrefab')
  request.r(i8807[12], i8807[13], 0, i8806, 'circleTrailVFXPrefab')
  request.r(i8807[14], i8807[15], 0, i8806, 'trailRenderer')
  return i8806
}

Deserializers["StateEvents"] = function (request, data, root) {
  var i8824 = root || request.c( 'StateEvents' )
  var i8825 = data
  i8824.OnEnableEvent = request.d('UnityEngine.Events.UnityEvent', i8825[0], i8824.OnEnableEvent)
  i8824.OnDisableEvent = request.d('UnityEngine.Events.UnityEvent', i8825[1], i8824.OnDisableEvent)
  i8824.OnStartEvent = request.d('UnityEngine.Events.UnityEvent', i8825[2], i8824.OnStartEvent)
  i8824.autoEnable = !!i8825[3]
  i8824.autoEnableDelay = i8825[4]
  i8824.autoDisableDelay = i8825[5]
  return i8824
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i8826 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i8827 = data
  request.r(i8827[0], i8827[1], 0, i8826, 'm_ObjectArgument')
  i8826.m_ObjectArgumentAssemblyTypeName = i8827[2]
  i8826.m_IntArgument = i8827[3]
  i8826.m_FloatArgument = i8827[4]
  i8826.m_StringArgument = i8827[5]
  i8826.m_BoolArgument = !!i8827[6]
  return i8826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i8828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i8829 = data
  i8828.enabled = !!i8829[0]
  request.r(i8829[1], i8829[2], 0, i8828, 'sharedMaterial')
  var i8831 = i8829[3]
  var i8830 = []
  for(var i = 0; i < i8831.length; i += 2) {
  request.r(i8831[i + 0], i8831[i + 1], 2, i8830, '')
  }
  i8828.sharedMaterials = i8830
  i8828.receiveShadows = !!i8829[4]
  i8828.shadowCastingMode = i8829[5]
  i8828.sortingLayerID = i8829[6]
  i8828.sortingOrder = i8829[7]
  i8828.lightmapIndex = i8829[8]
  i8828.lightmapSceneIndex = i8829[9]
  i8828.lightmapScaleOffset = new pc.Vec4( i8829[10], i8829[11], i8829[12], i8829[13] )
  i8828.lightProbeUsage = i8829[14]
  i8828.reflectionProbeUsage = i8829[15]
  var i8833 = i8829[16]
  var i8832 = []
  for(var i = 0; i < i8833.length; i += 3) {
    i8832.push( new pc.Vec3( i8833[i + 0], i8833[i + 1], i8833[i + 2] ) );
  }
  i8828.positions = i8832
  i8828.positionCount = i8829[17]
  i8828.time = i8829[18]
  i8828.startWidth = i8829[19]
  i8828.endWidth = i8829[20]
  i8828.widthMultiplier = i8829[21]
  i8828.autodestruct = !!i8829[22]
  i8828.emitting = !!i8829[23]
  i8828.numCornerVertices = i8829[24]
  i8828.numCapVertices = i8829[25]
  i8828.minVertexDistance = i8829[26]
  i8828.colorGradient = i8829[27] ? new pc.ColorGradient(i8829[27][0], i8829[27][1], i8829[27][2]) : null
  i8828.startColor = new pc.Color(i8829[28], i8829[29], i8829[30], i8829[31])
  i8828.endColor = new pc.Color(i8829[32], i8829[33], i8829[34], i8829[35])
  i8828.generateLightingData = !!i8829[36]
  i8828.textureMode = i8829[37]
  i8828.alignment = i8829[38]
  i8828.widthCurve = new pc.AnimationCurve( { keys_flow: i8829[39] } )
  return i8828
}

Deserializers["PositionTracking"] = function (request, data, root) {
  var i8836 = root || request.c( 'PositionTracking' )
  var i8837 = data
  return i8836
}

Deserializers["PNGSequencer"] = function (request, data, root) {
  var i8838 = root || request.c( 'PNGSequencer' )
  var i8839 = data
  i8838.frameRate = i8839[0]
  var i8841 = i8839[1]
  var i8840 = new (System.Collections.Generic.List$1(Bridge.ns('Animations')))
  for(var i = 0; i < i8841.length; i += 1) {
    i8840.add(request.d('Animations', i8841[i + 0]));
  }
  i8838.animations = i8840
  i8838.loop = !!i8839[2]
  i8838.playOnStart = !!i8839[3]
  i8838.isUIElement = !!i8839[4]
  request.r(i8839[5], i8839[6], 0, i8838, 'targetImage')
  request.r(i8839[7], i8839[8], 0, i8838, 'targetRenderer')
  return i8838
}

Deserializers["Animations"] = function (request, data, root) {
  var i8844 = root || request.c( 'Animations' )
  var i8845 = data
  i8844.name = i8845[0]
  i8844.isLooping = !!i8845[1]
  i8844.frameRate = i8845[2]
  var i8847 = i8845[3]
  var i8846 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i8847.length; i += 2) {
  request.r(i8847[i + 0], i8847[i + 1], 1, i8846, '')
  }
  i8844.frames = i8846
  i8844.transitionToNextAnimation = !!i8845[4]
  i8844.nextAnimationName = i8845[5]
  return i8844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i8850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i8851 = data
  i8850.name = i8851[0]
  i8850.index = i8851[1]
  i8850.startup = !!i8851[2]
  return i8850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i8852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i8853 = data
  i8852.enabled = !!i8853[0]
  i8852.aspect = i8853[1]
  i8852.orthographic = !!i8853[2]
  i8852.orthographicSize = i8853[3]
  i8852.backgroundColor = new pc.Color(i8853[4], i8853[5], i8853[6], i8853[7])
  i8852.nearClipPlane = i8853[8]
  i8852.farClipPlane = i8853[9]
  i8852.fieldOfView = i8853[10]
  i8852.depth = i8853[11]
  i8852.clearFlags = i8853[12]
  i8852.cullingMask = i8853[13]
  i8852.rect = i8853[14]
  request.r(i8853[15], i8853[16], 0, i8852, 'targetTexture')
  i8852.usePhysicalProperties = !!i8853[17]
  i8852.focalLength = i8853[18]
  i8852.sensorSize = new pc.Vec2( i8853[19], i8853[20] )
  i8852.lensShift = new pc.Vec2( i8853[21], i8853[22] )
  i8852.gateFit = i8853[23]
  i8852.commandBufferCount = i8853[24]
  i8852.cameraType = i8853[25]
  return i8852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i8854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i8855 = data
  i8854.enabled = !!i8855[0]
  i8854.planeDistance = i8855[1]
  i8854.referencePixelsPerUnit = i8855[2]
  i8854.isFallbackOverlay = !!i8855[3]
  i8854.renderMode = i8855[4]
  i8854.renderOrder = i8855[5]
  i8854.sortingLayerName = i8855[6]
  i8854.sortingOrder = i8855[7]
  i8854.scaleFactor = i8855[8]
  request.r(i8855[9], i8855[10], 0, i8854, 'worldCamera')
  i8854.overrideSorting = !!i8855[11]
  i8854.pixelPerfect = !!i8855[12]
  i8854.targetDisplay = i8855[13]
  i8854.overridePixelPerfect = !!i8855[14]
  return i8854
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i8856 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i8857 = data
  i8856.m_UiScaleMode = i8857[0]
  i8856.m_ReferencePixelsPerUnit = i8857[1]
  i8856.m_ScaleFactor = i8857[2]
  i8856.m_ReferenceResolution = new pc.Vec2( i8857[3], i8857[4] )
  i8856.m_ScreenMatchMode = i8857[5]
  i8856.m_MatchWidthOrHeight = i8857[6]
  i8856.m_PhysicalUnit = i8857[7]
  i8856.m_FallbackScreenDPI = i8857[8]
  i8856.m_DefaultSpriteDPI = i8857[9]
  i8856.m_DynamicPixelsPerUnit = i8857[10]
  i8856.m_PresetInfoIsWorld = !!i8857[11]
  return i8856
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i8858 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i8859 = data
  i8858.m_IgnoreReversedGraphics = !!i8859[0]
  i8858.m_BlockingObjects = i8859[1]
  i8858.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i8859[2] )
  return i8858
}

Deserializers["BasicFade"] = function (request, data, root) {
  var i8860 = root || request.c( 'BasicFade' )
  var i8861 = data
  request.r(i8861[0], i8861[1], 0, i8860, 'canvasGroup')
  i8860.duration = i8861[2]
  return i8860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i8862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i8863 = data
  i8862.m_Alpha = i8863[0]
  i8862.m_Interactable = !!i8863[1]
  i8862.m_BlocksRaycasts = !!i8863[2]
  i8862.m_IgnoreParentGroups = !!i8863[3]
  i8862.enabled = !!i8863[4]
  return i8862
}

Deserializers["AppearAnimation"] = function (request, data, root) {
  var i8864 = root || request.c( 'AppearAnimation' )
  var i8865 = data
  i8864.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i8865[0], i8864.OnMovementComplete)
  i8864.fadeInDuration = i8865[1]
  i8864.fadeInDelay = i8865[2]
  i8864.fillDuration = i8865[3]
  i8864.fillDelay = i8865[4]
  i8864.targetFillAmount = i8865[5]
  i8864.initialFillAmount = i8865[6]
  return i8864
}

Deserializers["PlayerGuide"] = function (request, data, root) {
  var i8866 = root || request.c( 'PlayerGuide' )
  var i8867 = data
  var i8869 = i8867[0]
  var i8868 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8869.length; i += 2) {
  request.r(i8869[i + 0], i8869[i + 1], 1, i8868, '')
  }
  i8866.prompts = i8868
  return i8866
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i8872 = root || request.c( 'UnityEngine.UI.Button' )
  var i8873 = data
  i8872.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i8873[0], i8872.m_OnClick)
  i8872.m_Navigation = request.d('UnityEngine.UI.Navigation', i8873[1], i8872.m_Navigation)
  i8872.m_Transition = i8873[2]
  i8872.m_Colors = request.d('UnityEngine.UI.ColorBlock', i8873[3], i8872.m_Colors)
  i8872.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i8873[4], i8872.m_SpriteState)
  i8872.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i8873[5], i8872.m_AnimationTriggers)
  i8872.m_Interactable = !!i8873[6]
  request.r(i8873[7], i8873[8], 0, i8872, 'm_TargetGraphic')
  return i8872
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i8874 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i8875 = data
  i8874.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8875[0], i8874.m_PersistentCalls)
  return i8874
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i8876 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i8877 = data
  i8876.m_Mode = i8877[0]
  i8876.m_WrapAround = !!i8877[1]
  request.r(i8877[2], i8877[3], 0, i8876, 'm_SelectOnUp')
  request.r(i8877[4], i8877[5], 0, i8876, 'm_SelectOnDown')
  request.r(i8877[6], i8877[7], 0, i8876, 'm_SelectOnLeft')
  request.r(i8877[8], i8877[9], 0, i8876, 'm_SelectOnRight')
  return i8876
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i8878 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i8879 = data
  i8878.m_NormalColor = new pc.Color(i8879[0], i8879[1], i8879[2], i8879[3])
  i8878.m_HighlightedColor = new pc.Color(i8879[4], i8879[5], i8879[6], i8879[7])
  i8878.m_PressedColor = new pc.Color(i8879[8], i8879[9], i8879[10], i8879[11])
  i8878.m_SelectedColor = new pc.Color(i8879[12], i8879[13], i8879[14], i8879[15])
  i8878.m_DisabledColor = new pc.Color(i8879[16], i8879[17], i8879[18], i8879[19])
  i8878.m_ColorMultiplier = i8879[20]
  i8878.m_FadeDuration = i8879[21]
  return i8878
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i8880 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i8881 = data
  request.r(i8881[0], i8881[1], 0, i8880, 'm_HighlightedSprite')
  request.r(i8881[2], i8881[3], 0, i8880, 'm_PressedSprite')
  request.r(i8881[4], i8881[5], 0, i8880, 'm_SelectedSprite')
  request.r(i8881[6], i8881[7], 0, i8880, 'm_DisabledSprite')
  return i8880
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i8882 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i8883 = data
  i8882.m_NormalTrigger = i8883[0]
  i8882.m_HighlightedTrigger = i8883[1]
  i8882.m_PressedTrigger = i8883[2]
  i8882.m_SelectedTrigger = i8883[3]
  i8882.m_DisabledTrigger = i8883[4]
  return i8882
}

Deserializers["RectAnimator"] = function (request, data, root) {
  var i8884 = root || request.c( 'RectAnimator' )
  var i8885 = data
  request.r(i8885[0], i8885[1], 0, i8884, 'rectTransform')
  i8884.animateScale = !!i8885[2]
  i8884.isScaleLooping = !!i8885[3]
  i8884.scaleTo = i8885[4]
  i8884.scaleDuration = i8885[5]
  i8884.scaleEaseType = i8885[6]
  i8884.scaleStartDelay = i8885[7]
  i8884.animateMove = !!i8885[8]
  i8884.isMoveLooping = !!i8885[9]
  i8884.moveTo = new pc.Vec2( i8885[10], i8885[11] )
  i8884.moveDuration = i8885[12]
  i8884.moveEaseType = i8885[13]
  i8884.moveLoopType = i8885[14]
  i8884.moveStartDelay = i8885[15]
  i8884.initialPos = new pc.Vec3( i8885[16], i8885[17], i8885[18] )
  i8884.initialScale = new pc.Vec3( i8885[19], i8885[20], i8885[21] )
  return i8884
}

Deserializers["TileManager"] = function (request, data, root) {
  var i8886 = root || request.c( 'TileManager' )
  var i8887 = data
  i8886.cellWidth = i8887[0]
  i8886.cellHeight = i8887[1]
  request.r(i8887[2], i8887[3], 0, i8886, 'canvasGroup')
  var i8889 = i8887[4]
  var i8888 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i8889.length; i += 2) {
  request.r(i8889[i + 0], i8889[i + 1], 1, i8888, '')
  }
  i8886.cells = i8888
  var i8891 = i8887[5]
  var i8890 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i8891.length; i += 2) {
  request.r(i8891[i + 0], i8891[i + 1], 1, i8890, '')
  }
  i8886.tileDataPool = i8890
  i8886.GridHeight = i8887[6]
  i8886.SequenceDelay = i8887[7]
  i8886.BreakDelay = i8887[8]
  i8886.FallDelay = i8887[9]
  i8886.CheckDelay = i8887[10]
  i8886.levelColorValues = i8887[11]
  var i8893 = i8887[12]
  var i8892 = new (System.Collections.Generic.List$1(Bridge.ns('TileData')))
  for(var i = 0; i < i8893.length; i += 2) {
  request.r(i8893[i + 0], i8893[i + 1], 1, i8892, '')
  }
  i8886.powerupDataPool = i8892
  request.r(i8887[13], i8887[14], 0, i8886, 'dynamitePowerup')
  return i8886
}

Deserializers["SpecialTileManager"] = function (request, data, root) {
  var i8898 = root || request.c( 'SpecialTileManager' )
  var i8899 = data
  request.r(i8899[0], i8899[1], 0, i8898, 'tileManager')
  var i8901 = i8899[2]
  var i8900 = new (System.Collections.Generic.List$1(Bridge.ns('TileCell')))
  for(var i = 0; i < i8901.length; i += 2) {
  request.r(i8901[i + 0], i8901[i + 1], 1, i8900, '')
  }
  i8898.cellList = i8900
  var i8903 = i8899[3]
  var i8902 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonGraphic')))
  for(var i = 0; i < i8903.length; i += 2) {
  request.r(i8903[i + 0], i8903[i + 1], 1, i8902, '')
  }
  i8898.SpecialTiles = i8902
  i8898.specialTileTargetPos = i8899[4]
  i8898.pigPos = i8899[5]
  i8898.chickenPos = i8899[6]
  return i8898
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i8906 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i8907 = data
  i8906.m_Spacing = i8907[0]
  i8906.m_ChildForceExpandWidth = !!i8907[1]
  i8906.m_ChildForceExpandHeight = !!i8907[2]
  i8906.m_ChildControlWidth = !!i8907[3]
  i8906.m_ChildControlHeight = !!i8907[4]
  i8906.m_ChildScaleWidth = !!i8907[5]
  i8906.m_ChildScaleHeight = !!i8907[6]
  i8906.m_ReverseArrangement = !!i8907[7]
  i8906.m_Padding = UnityEngine.RectOffset.FromPaddings(i8907[8], i8907[9], i8907[10], i8907[11])
  i8906.m_ChildAlignment = i8907[12]
  return i8906
}

Deserializers["UIMoveTo"] = function (request, data, root) {
  var i8908 = root || request.c( 'UIMoveTo' )
  var i8909 = data
  request.r(i8909[0], i8909[1], 0, i8908, 'imageTransform')
  i8908.targetPosition = new pc.Vec2( i8909[2], i8909[3] )
  i8908.anticipationOffset = i8909[4]
  i8908.duration = i8909[5]
  i8908.enableOnStart = !!i8909[6]
  i8908.delayBeforeStart = i8909[7]
  i8908.delayBeforeEnd = i8909[8]
  i8908.OnMovementStart = request.d('UnityEngine.Events.UnityEvent', i8909[9], i8908.OnMovementStart)
  i8908.OnMovementComplete = request.d('UnityEngine.Events.UnityEvent', i8909[10], i8908.OnMovementComplete)
  var i8911 = i8909[11]
  var i8910 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8911.length; i += 2) {
  request.r(i8911[i + 0], i8911[i + 1], 1, i8910, '')
  }
  i8908.objectsToEnable = i8910
  return i8908
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i8912 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i8913 = data
  i8912.m_StartCorner = i8913[0]
  i8912.m_StartAxis = i8913[1]
  i8912.m_CellSize = new pc.Vec2( i8913[2], i8913[3] )
  i8912.m_Spacing = new pc.Vec2( i8913[4], i8913[5] )
  i8912.m_Constraint = i8913[6]
  i8912.m_ConstraintCount = i8913[7]
  i8912.m_Padding = UnityEngine.RectOffset.FromPaddings(i8913[8], i8913[9], i8913[10], i8913[11])
  i8912.m_ChildAlignment = i8913[12]
  return i8912
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i8914 = root || request.c( 'UnityEngine.UI.Mask' )
  var i8915 = data
  i8914.m_ShowMaskGraphic = !!i8915[0]
  return i8914
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i8916 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i8917 = data
  request.r(i8917[0], i8917[1], 0, i8916, 'skeletonDataAsset')
  request.r(i8917[2], i8917[3], 0, i8916, 'additiveMaterial')
  request.r(i8917[4], i8917[5], 0, i8916, 'multiplyMaterial')
  request.r(i8917[6], i8917[7], 0, i8916, 'screenMaterial')
  i8916.initialSkinName = i8917[8]
  i8916.initialFlipX = !!i8917[9]
  i8916.initialFlipY = !!i8917[10]
  i8916.startingAnimation = i8917[11]
  i8916.startingLoop = !!i8917[12]
  i8916.timeScale = i8917[13]
  i8916.freeze = !!i8917[14]
  i8916.layoutScaleMode = i8917[15]
  i8916.updateWhenInvisible = i8917[16]
  i8916.allowMultipleCanvasRenderers = !!i8917[17]
  var i8919 = i8917[18]
  var i8918 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i8919.length; i += 2) {
  request.r(i8919[i + 0], i8919[i + 1], 1, i8918, '')
  }
  i8916.canvasRenderers = i8918
  i8916.enableSeparatorSlots = !!i8917[19]
  i8916.updateSeparatorPartLocation = !!i8917[20]
  i8916.updateSeparatorPartScale = !!i8917[21]
  i8916.disableMeshAssignmentOnOverride = !!i8917[22]
  i8916.m_SkeletonColor = new pc.Color(i8917[23], i8917[24], i8917[25], i8917[26])
  i8916.referenceSize = new pc.Vec2( i8917[27], i8917[28] )
  i8916.pivotOffset = new pc.Vec2( i8917[29], i8917[30] )
  i8916.referenceScale = i8917[31]
  i8916.layoutScale = i8917[32]
  i8916.rectTransformSize = new pc.Vec2( i8917[33], i8917[34] )
  i8916.editReferenceRect = !!i8917[35]
  var i8921 = i8917[36]
  var i8920 = []
  for(var i = 0; i < i8921.length; i += 1) {
    i8920.push( i8921[i + 0] );
  }
  i8916.separatorSlotNames = i8920
  var i8923 = i8917[37]
  var i8922 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i8923.length; i += 2) {
  request.r(i8923[i + 0], i8923[i + 1], 1, i8922, '')
  }
  i8916.separatorParts = i8922
  i8916.physicsPositionInheritanceFactor = new pc.Vec2( i8917[38], i8917[39] )
  i8916.physicsRotationInheritanceFactor = i8917[40]
  request.r(i8917[41], i8917[42], 0, i8916, 'physicsMovementRelativeTo')
  i8916.meshGenerator = request.d('Spine.Unity.MeshGenerator', i8917[43], i8916.meshGenerator)
  i8916.updateTiming = i8917[44]
  i8916.unscaledTime = !!i8917[45]
  request.r(i8917[46], i8917[47], 0, i8916, 'm_Material')
  i8916.m_Maskable = !!i8917[48]
  i8916.m_Color = new pc.Color(i8917[49], i8917[50], i8917[51], i8917[52])
  i8916.m_RaycastTarget = !!i8917[53]
  i8916.m_RaycastPadding = new pc.Vec4( i8917[54], i8917[55], i8917[56], i8917[57] )
  return i8916
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i8930 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i8931 = data
  i8930.settings = request.d('Spine.Unity.MeshGenerator+Settings', i8931[0], i8930.settings)
  return i8930
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i8932 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i8933 = data
  i8932.useClipping = !!i8933[0]
  i8932.zSpacing = i8933[1]
  i8932.tintBlack = !!i8933[2]
  i8932.canvasGroupCompatible = !!i8933[3]
  i8932.pmaVertexColors = !!i8933[4]
  i8932.addNormals = !!i8933[5]
  i8932.calculateTangents = !!i8933[6]
  i8932.immutableTriangles = !!i8933[7]
  return i8932
}

Deserializers["AnimatedTileSpawner"] = function (request, data, root) {
  var i8934 = root || request.c( 'AnimatedTileSpawner' )
  var i8935 = data
  var i8937 = i8935[0]
  var i8936 = new (System.Collections.Generic.List$1(Bridge.ns('AnimatedTile')))
  for(var i = 0; i < i8937.length; i += 2) {
  request.r(i8937[i + 0], i8937[i + 1], 1, i8936, '')
  }
  i8934.tiles = i8936
  var i8939 = i8935[1]
  var i8938 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8939.length; i += 2) {
  request.r(i8939[i + 0], i8939[i + 1], 1, i8938, '')
  }
  i8934.cornVFX = i8938
  return i8934
}

Deserializers["DynamiteEffect"] = function (request, data, root) {
  var i8942 = root || request.c( 'DynamiteEffect' )
  var i8943 = data
  i8942.initialScale = new pc.Vec3( i8943[0], i8943[1], i8943[2] )
  i8942.targetPos = new pc.Vec3( i8943[3], i8943[4], i8943[5] )
  i8942.duration = i8943[6]
  request.r(i8943[7], i8943[8], 0, i8942, 'model')
  request.r(i8943[9], i8943[10], 0, i8942, 'explosionEffectPrefab')
  return i8942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i8944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i8945 = data
  i8944.enabled = !!i8945[0]
  request.r(i8945[1], i8945[2], 0, i8944, 'sharedMaterial')
  var i8947 = i8945[3]
  var i8946 = []
  for(var i = 0; i < i8947.length; i += 2) {
  request.r(i8947[i + 0], i8947[i + 1], 2, i8946, '')
  }
  i8944.sharedMaterials = i8946
  i8944.receiveShadows = !!i8945[4]
  i8944.shadowCastingMode = i8945[5]
  i8944.sortingLayerID = i8945[6]
  i8944.sortingOrder = i8945[7]
  i8944.lightmapIndex = i8945[8]
  i8944.lightmapSceneIndex = i8945[9]
  i8944.lightmapScaleOffset = new pc.Vec4( i8945[10], i8945[11], i8945[12], i8945[13] )
  i8944.lightProbeUsage = i8945[14]
  i8944.reflectionProbeUsage = i8945[15]
  i8944.color = new pc.Color(i8945[16], i8945[17], i8945[18], i8945[19])
  request.r(i8945[20], i8945[21], 0, i8944, 'sprite')
  i8944.flipX = !!i8945[22]
  i8944.flipY = !!i8945[23]
  i8944.drawMode = i8945[24]
  i8944.size = new pc.Vec2( i8945[25], i8945[26] )
  i8944.tileMode = i8945[27]
  i8944.adaptiveModeThreshold = i8945[28]
  i8944.maskInteraction = i8945[29]
  i8944.spriteSortPoint = i8945[30]
  return i8944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i8948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i8949 = data
  request.r(i8949[0], i8949[1], 0, i8948, 'animatorController')
  request.r(i8949[2], i8949[3], 0, i8948, 'avatar')
  i8948.updateMode = i8949[4]
  i8948.hasTransformHierarchy = !!i8949[5]
  i8948.applyRootMotion = !!i8949[6]
  var i8951 = i8949[7]
  var i8950 = []
  for(var i = 0; i < i8951.length; i += 2) {
  request.r(i8951[i + 0], i8951[i + 1], 2, i8950, '')
  }
  i8948.humanBones = i8950
  i8948.enabled = !!i8949[8]
  return i8948
}

Deserializers["MergeHands"] = function (request, data, root) {
  var i8954 = root || request.c( 'MergeHands' )
  var i8955 = data
  request.r(i8955[0], i8955[1], 0, i8954, 'rectTransform')
  request.r(i8955[2], i8955[3], 0, i8954, 'target1')
  request.r(i8955[4], i8955[5], 0, i8954, 'target2')
  return i8954
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i8956 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i8957 = data
  request.r(i8957[0], i8957[1], 0, i8956, 'm_FirstSelected')
  i8956.m_sendNavigationEvents = !!i8957[2]
  i8956.m_DragThreshold = i8957[3]
  return i8956
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i8958 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i8959 = data
  i8958.m_HorizontalAxis = i8959[0]
  i8958.m_VerticalAxis = i8959[1]
  i8958.m_SubmitButton = i8959[2]
  i8958.m_CancelButton = i8959[3]
  i8958.m_InputActionsPerSecond = i8959[4]
  i8958.m_RepeatDelay = i8959[5]
  i8958.m_ForceModuleActive = !!i8959[6]
  i8958.m_SendPointerHoverToParent = !!i8959[7]
  return i8958
}

Deserializers["GameManager"] = function (request, data, root) {
  var i8960 = root || request.c( 'GameManager' )
  var i8961 = data
  i8960.IsSIP = !!i8961[0]
  i8960.gameType = i8961[1]
  i8960.toggleInactivityPanel = !!i8961[2]
  i8960.OnStartMIP1 = request.d('UnityEngine.Events.UnityEvent', i8961[3], i8960.OnStartMIP1)
  i8960.OnStartMIP2 = request.d('UnityEngine.Events.UnityEvent', i8961[4], i8960.OnStartMIP2)
  i8960.IsDoneCollecting = !!i8961[5]
  i8960.OnLevelComplete = request.d('UnityEngine.Events.UnityEvent', i8961[6], i8960.OnLevelComplete)
  request.r(i8961[7], i8961[8], 0, i8960, 'TutorialPanel')
  request.r(i8961[9], i8961[10], 0, i8960, 'GamePanel')
  request.r(i8961[11], i8961[12], 0, i8960, 'EndCard')
  request.r(i8961[13], i8961[14], 0, i8960, 'CTAPanel')
  request.r(i8961[15], i8961[16], 0, i8960, 'FailPanel')
  request.r(i8961[17], i8961[18], 0, i8960, 'EndCardInActivityPanel')
  i8960.iosLink = i8961[19]
  i8960.androidLink = i8961[20]
  i8960.hasTimer = !!i8961[21]
  i8960.currentTimer = i8961[22]
  i8960.maxTime = i8961[23]
  i8960.gameOver = !!i8961[24]
  request.r(i8961[25], i8961[26], 0, i8960, 'inactivityPanel')
  request.r(i8961[27], i8961[28], 0, i8960, 'inactivityPanelGame')
  i8960.inactivityTime = i8961[29]
  i8960.inactivityTimer = i8961[30]
  request.r(i8961[31], i8961[32], 0, i8960, 'timerText')
  var i8963 = i8961[33]
  var i8962 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i8963.length; i += 1) {
    i8962.add(request.d('GameManager+FurnitureItems', i8963[i + 0]));
  }
  i8960.items = i8962
  i8960.CurrentLevel = i8961[34]
  var i8965 = i8961[35]
  var i8964 = new (System.Collections.Generic.List$1(Bridge.ns('GameManager+FurnitureItems')))
  for(var i = 0; i < i8965.length; i += 1) {
    i8964.add(request.d('GameManager+FurnitureItems', i8965[i + 0]));
  }
  i8960.currentFurnitures = i8964
  var i8967 = i8961[36]
  var i8966 = new (System.Collections.Generic.List$1(Bridge.ns('BasicFade')))
  for(var i = 0; i < i8967.length; i += 2) {
  request.r(i8967[i + 0], i8967[i + 1], 1, i8966, '')
  }
  i8960.gameBoards = i8966
  var i8969 = i8961[37]
  var i8968 = new (System.Collections.Generic.List$1(Bridge.ns('AnimationBase')))
  for(var i = 0; i < i8969.length; i += 2) {
  request.r(i8969[i + 0], i8969[i + 1], 1, i8968, '')
  }
  i8960.furnitureDecorations = i8968
  var i8971 = i8961[38]
  var i8970 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8971.length; i += 2) {
  request.r(i8971[i + 0], i8971[i + 1], 1, i8970, '')
  }
  i8960.mip1Objects = i8970
  var i8973 = i8961[39]
  var i8972 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8973.length; i += 2) {
  request.r(i8973[i + 0], i8973[i + 1], 1, i8972, '')
  }
  i8960.mip2Objects = i8972
  var i8975 = i8961[40]
  var i8974 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8975.length; i += 2) {
  request.r(i8975[i + 0], i8975[i + 1], 1, i8974, '')
  }
  i8960.Feedback = i8974
  var i8977 = i8961[41]
  var i8976 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i8977.length; i += 1) {
    i8976.add(i8977[i + 0]);
  }
  i8960.audioKeys = i8976
  var i8979 = i8961[42]
  var i8978 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i8979.length; i += 1) {
    i8978.add(i8979[i + 0]);
  }
  i8960.cameraPanLocation = i8978
  request.r(i8961[43], i8961[44], 0, i8960, 'cameraPanObject')
  i8960.mip1ButtonPress = !!i8961[45]
  i8960.puzzlesToSolve = i8961[46]
  var i8981 = i8961[47]
  var i8980 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i8981.length; i += 2) {
  request.r(i8981[i + 0], i8981[i + 1], 1, i8980, '')
  }
  i8960.redirectButtons = i8980
  return i8960
}

Deserializers["GameManager+FurnitureItems"] = function (request, data, root) {
  var i8984 = root || request.c( 'GameManager+FurnitureItems' )
  var i8985 = data
  i8984.key = i8985[0]
  request.r(i8985[1], i8985[2], 0, i8984, 'value')
  return i8984
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i8992 = root || request.c( 'AudioManager' )
  var i8993 = data
  request.r(i8993[0], i8993[1], 0, i8992, 'library')
  i8992.sfxPoolSize = i8993[2]
  return i8992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i8994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i8995 = data
  i8994.ambientIntensity = i8995[0]
  i8994.reflectionIntensity = i8995[1]
  i8994.ambientMode = i8995[2]
  i8994.ambientLight = new pc.Color(i8995[3], i8995[4], i8995[5], i8995[6])
  i8994.ambientSkyColor = new pc.Color(i8995[7], i8995[8], i8995[9], i8995[10])
  i8994.ambientGroundColor = new pc.Color(i8995[11], i8995[12], i8995[13], i8995[14])
  i8994.ambientEquatorColor = new pc.Color(i8995[15], i8995[16], i8995[17], i8995[18])
  i8994.fogColor = new pc.Color(i8995[19], i8995[20], i8995[21], i8995[22])
  i8994.fogEndDistance = i8995[23]
  i8994.fogStartDistance = i8995[24]
  i8994.fogDensity = i8995[25]
  i8994.fog = !!i8995[26]
  request.r(i8995[27], i8995[28], 0, i8994, 'skybox')
  i8994.fogMode = i8995[29]
  var i8997 = i8995[30]
  var i8996 = []
  for(var i = 0; i < i8997.length; i += 1) {
    i8996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i8997[i + 0]) );
  }
  i8994.lightmaps = i8996
  i8994.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i8995[31], i8994.lightProbes)
  i8994.lightmapsMode = i8995[32]
  i8994.mixedBakeMode = i8995[33]
  i8994.environmentLightingMode = i8995[34]
  i8994.ambientProbe = new pc.SphericalHarmonicsL2(i8995[35])
  i8994.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i8995[36])
  i8994.useReferenceAmbientProbe = !!i8995[37]
  request.r(i8995[38], i8995[39], 0, i8994, 'customReflection')
  request.r(i8995[40], i8995[41], 0, i8994, 'defaultReflection')
  i8994.defaultReflectionMode = i8995[42]
  i8994.defaultReflectionResolution = i8995[43]
  i8994.sunLightObjectId = i8995[44]
  i8994.pixelLightCount = i8995[45]
  i8994.defaultReflectionHDR = !!i8995[46]
  i8994.hasLightDataAsset = !!i8995[47]
  i8994.hasManualGenerate = !!i8995[48]
  return i8994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i9000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i9001 = data
  request.r(i9001[0], i9001[1], 0, i9000, 'lightmapColor')
  request.r(i9001[2], i9001[3], 0, i9000, 'lightmapDirection')
  return i9000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i9002 = root || new UnityEngine.LightProbes()
  var i9003 = data
  return i9002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i9008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i9009 = data
  var i9011 = i9009[0]
  var i9010 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i9011.length; i += 1) {
    i9010.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i9011[i + 0]));
  }
  i9008.ShaderCompilationErrors = i9010
  i9008.name = i9009[1]
  i9008.guid = i9009[2]
  var i9013 = i9009[3]
  var i9012 = []
  for(var i = 0; i < i9013.length; i += 1) {
    i9012.push( i9013[i + 0] );
  }
  i9008.shaderDefinedKeywords = i9012
  var i9015 = i9009[4]
  var i9014 = []
  for(var i = 0; i < i9015.length; i += 1) {
    i9014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i9015[i + 0]) );
  }
  i9008.passes = i9014
  var i9017 = i9009[5]
  var i9016 = []
  for(var i = 0; i < i9017.length; i += 1) {
    i9016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i9017[i + 0]) );
  }
  i9008.usePasses = i9016
  var i9019 = i9009[6]
  var i9018 = []
  for(var i = 0; i < i9019.length; i += 1) {
    i9018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i9019[i + 0]) );
  }
  i9008.defaultParameterValues = i9018
  request.r(i9009[7], i9009[8], 0, i9008, 'unityFallbackShader')
  i9008.readDepth = !!i9009[9]
  i9008.isCreatedByShaderGraph = !!i9009[10]
  i9008.compiled = !!i9009[11]
  return i9008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i9022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i9023 = data
  i9022.shaderName = i9023[0]
  i9022.errorMessage = i9023[1]
  return i9022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i9026 = root || new pc.UnityShaderPass()
  var i9027 = data
  i9026.id = i9027[0]
  i9026.subShaderIndex = i9027[1]
  i9026.name = i9027[2]
  i9026.passType = i9027[3]
  i9026.grabPassTextureName = i9027[4]
  i9026.usePass = !!i9027[5]
  i9026.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9027[6], i9026.zTest)
  i9026.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9027[7], i9026.zWrite)
  i9026.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9027[8], i9026.culling)
  i9026.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i9027[9], i9026.blending)
  i9026.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i9027[10], i9026.alphaBlending)
  i9026.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9027[11], i9026.colorWriteMask)
  i9026.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9027[12], i9026.offsetUnits)
  i9026.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9027[13], i9026.offsetFactor)
  i9026.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9027[14], i9026.stencilRef)
  i9026.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9027[15], i9026.stencilReadMask)
  i9026.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9027[16], i9026.stencilWriteMask)
  i9026.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9027[17], i9026.stencilOp)
  i9026.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9027[18], i9026.stencilOpFront)
  i9026.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i9027[19], i9026.stencilOpBack)
  var i9029 = i9027[20]
  var i9028 = []
  for(var i = 0; i < i9029.length; i += 1) {
    i9028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i9029[i + 0]) );
  }
  i9026.tags = i9028
  var i9031 = i9027[21]
  var i9030 = []
  for(var i = 0; i < i9031.length; i += 1) {
    i9030.push( i9031[i + 0] );
  }
  i9026.passDefinedKeywords = i9030
  var i9033 = i9027[22]
  var i9032 = []
  for(var i = 0; i < i9033.length; i += 1) {
    i9032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i9033[i + 0]) );
  }
  i9026.passDefinedKeywordGroups = i9032
  var i9035 = i9027[23]
  var i9034 = []
  for(var i = 0; i < i9035.length; i += 1) {
    i9034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i9035[i + 0]) );
  }
  i9026.variants = i9034
  var i9037 = i9027[24]
  var i9036 = []
  for(var i = 0; i < i9037.length; i += 1) {
    i9036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i9037[i + 0]) );
  }
  i9026.excludedVariants = i9036
  i9026.hasDepthReader = !!i9027[25]
  return i9026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i9038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i9039 = data
  i9038.val = i9039[0]
  i9038.name = i9039[1]
  return i9038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i9040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i9041 = data
  i9040.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9041[0], i9040.src)
  i9040.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9041[1], i9040.dst)
  i9040.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9041[2], i9040.op)
  return i9040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i9042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i9043 = data
  i9042.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9043[0], i9042.pass)
  i9042.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9043[1], i9042.fail)
  i9042.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9043[2], i9042.zFail)
  i9042.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i9043[3], i9042.comp)
  return i9042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i9046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i9047 = data
  i9046.name = i9047[0]
  i9046.value = i9047[1]
  return i9046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i9050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i9051 = data
  var i9053 = i9051[0]
  var i9052 = []
  for(var i = 0; i < i9053.length; i += 1) {
    i9052.push( i9053[i + 0] );
  }
  i9050.keywords = i9052
  i9050.hasDiscard = !!i9051[1]
  return i9050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i9056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i9057 = data
  i9056.passId = i9057[0]
  i9056.subShaderIndex = i9057[1]
  var i9059 = i9057[2]
  var i9058 = []
  for(var i = 0; i < i9059.length; i += 1) {
    i9058.push( i9059[i + 0] );
  }
  i9056.keywords = i9058
  i9056.vertexProgram = i9057[3]
  i9056.fragmentProgram = i9057[4]
  i9056.exportedForWebGl2 = !!i9057[5]
  i9056.readDepth = !!i9057[6]
  return i9056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i9062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i9063 = data
  request.r(i9063[0], i9063[1], 0, i9062, 'shader')
  i9062.pass = i9063[2]
  return i9062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i9066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i9067 = data
  i9066.name = i9067[0]
  i9066.type = i9067[1]
  i9066.value = new pc.Vec4( i9067[2], i9067[3], i9067[4], i9067[5] )
  i9066.textureValue = i9067[6]
  i9066.shaderPropertyFlag = i9067[7]
  return i9066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i9068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i9069 = data
  i9068.name = i9069[0]
  request.r(i9069[1], i9069[2], 0, i9068, 'texture')
  i9068.aabb = i9069[3]
  i9068.vertices = i9069[4]
  i9068.triangles = i9069[5]
  i9068.textureRect = UnityEngine.Rect.MinMaxRect(i9069[6], i9069[7], i9069[8], i9069[9])
  i9068.packedRect = UnityEngine.Rect.MinMaxRect(i9069[10], i9069[11], i9069[12], i9069[13])
  i9068.border = new pc.Vec4( i9069[14], i9069[15], i9069[16], i9069[17] )
  i9068.transparency = i9069[18]
  i9068.bounds = i9069[19]
  i9068.pixelsPerUnit = i9069[20]
  i9068.textureWidth = i9069[21]
  i9068.textureHeight = i9069[22]
  i9068.nativeSize = new pc.Vec2( i9069[23], i9069[24] )
  i9068.pivot = new pc.Vec2( i9069[25], i9069[26] )
  i9068.textureRectOffset = new pc.Vec2( i9069[27], i9069[28] )
  return i9068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i9070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i9071 = data
  i9070.name = i9071[0]
  return i9070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i9072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i9073 = data
  i9072.name = i9073[0]
  i9072.wrapMode = i9073[1]
  i9072.isLooping = !!i9073[2]
  i9072.length = i9073[3]
  var i9075 = i9073[4]
  var i9074 = []
  for(var i = 0; i < i9075.length; i += 1) {
    i9074.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i9075[i + 0]) );
  }
  i9072.curves = i9074
  var i9077 = i9073[5]
  var i9076 = []
  for(var i = 0; i < i9077.length; i += 1) {
    i9076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i9077[i + 0]) );
  }
  i9072.events = i9076
  i9072.halfPrecision = !!i9073[6]
  i9072._frameRate = i9073[7]
  i9072.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i9073[8], i9072.localBounds)
  i9072.hasMuscleCurves = !!i9073[9]
  var i9079 = i9073[10]
  var i9078 = []
  for(var i = 0; i < i9079.length; i += 1) {
    i9078.push( i9079[i + 0] );
  }
  i9072.clipMuscleConstant = i9078
  i9072.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i9073[11], i9072.clipBindingConstant)
  return i9072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i9082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i9083 = data
  i9082.path = i9083[0]
  i9082.hash = i9083[1]
  i9082.componentType = i9083[2]
  i9082.property = i9083[3]
  i9082.keys = i9083[4]
  var i9085 = i9083[5]
  var i9084 = []
  for(var i = 0; i < i9085.length; i += 1) {
    i9084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i9085[i + 0]) );
  }
  i9082.objectReferenceKeys = i9084
  return i9082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i9088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i9089 = data
  i9088.time = i9089[0]
  request.r(i9089[1], i9089[2], 0, i9088, 'value')
  return i9088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i9092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i9093 = data
  i9092.functionName = i9093[0]
  i9092.floatParameter = i9093[1]
  i9092.intParameter = i9093[2]
  i9092.stringParameter = i9093[3]
  request.r(i9093[4], i9093[5], 0, i9092, 'objectReferenceParameter')
  i9092.time = i9093[6]
  return i9092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i9094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i9095 = data
  i9094.center = new pc.Vec3( i9095[0], i9095[1], i9095[2] )
  i9094.extends = new pc.Vec3( i9095[3], i9095[4], i9095[5] )
  return i9094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i9098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i9099 = data
  var i9101 = i9099[0]
  var i9100 = []
  for(var i = 0; i < i9101.length; i += 1) {
    i9100.push( i9101[i + 0] );
  }
  i9098.genericBindings = i9100
  var i9103 = i9099[1]
  var i9102 = []
  for(var i = 0; i < i9103.length; i += 1) {
    i9102.push( i9103[i + 0] );
  }
  i9098.pptrCurveMapping = i9102
  return i9098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i9104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i9105 = data
  i9104.name = i9105[0]
  i9104.ascent = i9105[1]
  i9104.originalLineHeight = i9105[2]
  i9104.fontSize = i9105[3]
  var i9107 = i9105[4]
  var i9106 = []
  for(var i = 0; i < i9107.length; i += 1) {
    i9106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i9107[i + 0]) );
  }
  i9104.characterInfo = i9106
  request.r(i9105[5], i9105[6], 0, i9104, 'texture')
  i9104.originalFontSize = i9105[7]
  return i9104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i9110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i9111 = data
  i9110.index = i9111[0]
  i9110.advance = i9111[1]
  i9110.bearing = i9111[2]
  i9110.glyphWidth = i9111[3]
  i9110.glyphHeight = i9111[4]
  i9110.minX = i9111[5]
  i9110.maxX = i9111[6]
  i9110.minY = i9111[7]
  i9110.maxY = i9111[8]
  i9110.uvBottomLeftX = i9111[9]
  i9110.uvBottomLeftY = i9111[10]
  i9110.uvBottomRightX = i9111[11]
  i9110.uvBottomRightY = i9111[12]
  i9110.uvTopLeftX = i9111[13]
  i9110.uvTopLeftY = i9111[14]
  i9110.uvTopRightX = i9111[15]
  i9110.uvTopRightY = i9111[16]
  return i9110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i9112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i9113 = data
  i9112.name = i9113[0]
  var i9115 = i9113[1]
  var i9114 = []
  for(var i = 0; i < i9115.length; i += 1) {
    i9114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i9115[i + 0]) );
  }
  i9112.layers = i9114
  var i9117 = i9113[2]
  var i9116 = []
  for(var i = 0; i < i9117.length; i += 1) {
    i9116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i9117[i + 0]) );
  }
  i9112.parameters = i9116
  i9112.animationClips = i9113[3]
  i9112.avatarUnsupported = i9113[4]
  return i9112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i9120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i9121 = data
  i9120.name = i9121[0]
  i9120.defaultWeight = i9121[1]
  i9120.blendingMode = i9121[2]
  i9120.avatarMask = i9121[3]
  i9120.syncedLayerIndex = i9121[4]
  i9120.syncedLayerAffectsTiming = !!i9121[5]
  i9120.syncedLayers = i9121[6]
  i9120.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i9121[7], i9120.stateMachine)
  return i9120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i9122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i9123 = data
  i9122.id = i9123[0]
  i9122.name = i9123[1]
  i9122.path = i9123[2]
  var i9125 = i9123[3]
  var i9124 = []
  for(var i = 0; i < i9125.length; i += 1) {
    i9124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i9125[i + 0]) );
  }
  i9122.states = i9124
  var i9127 = i9123[4]
  var i9126 = []
  for(var i = 0; i < i9127.length; i += 1) {
    i9126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i9127[i + 0]) );
  }
  i9122.machines = i9126
  var i9129 = i9123[5]
  var i9128 = []
  for(var i = 0; i < i9129.length; i += 1) {
    i9128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i9129[i + 0]) );
  }
  i9122.entryStateTransitions = i9128
  var i9131 = i9123[6]
  var i9130 = []
  for(var i = 0; i < i9131.length; i += 1) {
    i9130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i9131[i + 0]) );
  }
  i9122.exitStateTransitions = i9130
  var i9133 = i9123[7]
  var i9132 = []
  for(var i = 0; i < i9133.length; i += 1) {
    i9132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i9133[i + 0]) );
  }
  i9122.anyStateTransitions = i9132
  i9122.defaultStateId = i9123[8]
  return i9122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i9136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i9137 = data
  i9136.id = i9137[0]
  i9136.name = i9137[1]
  i9136.cycleOffset = i9137[2]
  i9136.cycleOffsetParameter = i9137[3]
  i9136.cycleOffsetParameterActive = !!i9137[4]
  i9136.mirror = !!i9137[5]
  i9136.mirrorParameter = i9137[6]
  i9136.mirrorParameterActive = !!i9137[7]
  i9136.motionId = i9137[8]
  i9136.nameHash = i9137[9]
  i9136.fullPathHash = i9137[10]
  i9136.speed = i9137[11]
  i9136.speedParameter = i9137[12]
  i9136.speedParameterActive = !!i9137[13]
  i9136.tag = i9137[14]
  i9136.tagHash = i9137[15]
  i9136.writeDefaultValues = !!i9137[16]
  var i9139 = i9137[17]
  var i9138 = []
  for(var i = 0; i < i9139.length; i += 2) {
  request.r(i9139[i + 0], i9139[i + 1], 2, i9138, '')
  }
  i9136.behaviours = i9138
  var i9141 = i9137[18]
  var i9140 = []
  for(var i = 0; i < i9141.length; i += 1) {
    i9140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i9141[i + 0]) );
  }
  i9136.transitions = i9140
  return i9136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i9146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i9147 = data
  i9146.fullPath = i9147[0]
  i9146.canTransitionToSelf = !!i9147[1]
  i9146.duration = i9147[2]
  i9146.exitTime = i9147[3]
  i9146.hasExitTime = !!i9147[4]
  i9146.hasFixedDuration = !!i9147[5]
  i9146.interruptionSource = i9147[6]
  i9146.offset = i9147[7]
  i9146.orderedInterruption = !!i9147[8]
  i9146.destinationStateId = i9147[9]
  i9146.isExit = !!i9147[10]
  i9146.mute = !!i9147[11]
  i9146.solo = !!i9147[12]
  var i9149 = i9147[13]
  var i9148 = []
  for(var i = 0; i < i9149.length; i += 1) {
    i9148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i9149[i + 0]) );
  }
  i9146.conditions = i9148
  return i9146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i9154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i9155 = data
  i9154.destinationStateId = i9155[0]
  i9154.isExit = !!i9155[1]
  i9154.mute = !!i9155[2]
  i9154.solo = !!i9155[3]
  var i9157 = i9155[4]
  var i9156 = []
  for(var i = 0; i < i9157.length; i += 1) {
    i9156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i9157[i + 0]) );
  }
  i9154.conditions = i9156
  return i9154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i9160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i9161 = data
  i9160.defaultBool = !!i9161[0]
  i9160.defaultFloat = i9161[1]
  i9160.defaultInt = i9161[2]
  i9160.name = i9161[3]
  i9160.nameHash = i9161[4]
  i9160.type = i9161[5]
  return i9160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i9162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i9163 = data
  i9162.name = i9163[0]
  i9162.bytes64 = i9163[1]
  i9162.data = i9163[2]
  return i9162
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i9164 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i9165 = data
  i9164.hashCode = i9165[0]
  request.r(i9165[1], i9165[2], 0, i9164, 'material')
  i9164.materialHashCode = i9165[3]
  request.r(i9165[4], i9165[5], 0, i9164, 'atlas')
  i9164.normalStyle = i9165[6]
  i9164.normalSpacingOffset = i9165[7]
  i9164.boldStyle = i9165[8]
  i9164.boldSpacing = i9165[9]
  i9164.italicStyle = i9165[10]
  i9164.tabSize = i9165[11]
  i9164.m_Version = i9165[12]
  i9164.m_SourceFontFileGUID = i9165[13]
  request.r(i9165[14], i9165[15], 0, i9164, 'm_SourceFontFile_EditorRef')
  request.r(i9165[16], i9165[17], 0, i9164, 'm_SourceFontFile')
  i9164.m_AtlasPopulationMode = i9165[18]
  i9164.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i9165[19], i9164.m_FaceInfo)
  var i9167 = i9165[20]
  var i9166 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i9167.length; i += 1) {
    i9166.add(request.d('UnityEngine.TextCore.Glyph', i9167[i + 0]));
  }
  i9164.m_GlyphTable = i9166
  var i9169 = i9165[21]
  var i9168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i9169.length; i += 1) {
    i9168.add(request.d('TMPro.TMP_Character', i9169[i + 0]));
  }
  i9164.m_CharacterTable = i9168
  var i9171 = i9165[22]
  var i9170 = []
  for(var i = 0; i < i9171.length; i += 2) {
  request.r(i9171[i + 0], i9171[i + 1], 2, i9170, '')
  }
  i9164.m_AtlasTextures = i9170
  i9164.m_AtlasTextureIndex = i9165[23]
  i9164.m_IsMultiAtlasTexturesEnabled = !!i9165[24]
  i9164.m_ClearDynamicDataOnBuild = !!i9165[25]
  var i9173 = i9165[26]
  var i9172 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i9173.length; i += 1) {
    i9172.add(request.d('UnityEngine.TextCore.GlyphRect', i9173[i + 0]));
  }
  i9164.m_UsedGlyphRects = i9172
  var i9175 = i9165[27]
  var i9174 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i9175.length; i += 1) {
    i9174.add(request.d('UnityEngine.TextCore.GlyphRect', i9175[i + 0]));
  }
  i9164.m_FreeGlyphRects = i9174
  i9164.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i9165[28], i9164.m_fontInfo)
  i9164.m_AtlasWidth = i9165[29]
  i9164.m_AtlasHeight = i9165[30]
  i9164.m_AtlasPadding = i9165[31]
  i9164.m_AtlasRenderMode = i9165[32]
  var i9177 = i9165[33]
  var i9176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i9177.length; i += 1) {
    i9176.add(request.d('TMPro.TMP_Glyph', i9177[i + 0]));
  }
  i9164.m_glyphInfoList = i9176
  i9164.m_KerningTable = request.d('TMPro.KerningTable', i9165[34], i9164.m_KerningTable)
  i9164.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i9165[35], i9164.m_FontFeatureTable)
  var i9179 = i9165[36]
  var i9178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i9179.length; i += 2) {
  request.r(i9179[i + 0], i9179[i + 1], 1, i9178, '')
  }
  i9164.fallbackFontAssets = i9178
  var i9181 = i9165[37]
  var i9180 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i9181.length; i += 2) {
  request.r(i9181[i + 0], i9181[i + 1], 1, i9180, '')
  }
  i9164.m_FallbackFontAssetTable = i9180
  i9164.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i9165[38], i9164.m_CreationSettings)
  var i9183 = i9165[39]
  var i9182 = []
  for(var i = 0; i < i9183.length; i += 1) {
    i9182.push( request.d('TMPro.TMP_FontWeightPair', i9183[i + 0]) );
  }
  i9164.m_FontWeightTable = i9182
  var i9185 = i9165[40]
  var i9184 = []
  for(var i = 0; i < i9185.length; i += 1) {
    i9184.push( request.d('TMPro.TMP_FontWeightPair', i9185[i + 0]) );
  }
  i9164.fontWeights = i9184
  return i9164
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i9186 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i9187 = data
  i9186.m_FaceIndex = i9187[0]
  i9186.m_FamilyName = i9187[1]
  i9186.m_StyleName = i9187[2]
  i9186.m_PointSize = i9187[3]
  i9186.m_Scale = i9187[4]
  i9186.m_UnitsPerEM = i9187[5]
  i9186.m_LineHeight = i9187[6]
  i9186.m_AscentLine = i9187[7]
  i9186.m_CapLine = i9187[8]
  i9186.m_MeanLine = i9187[9]
  i9186.m_Baseline = i9187[10]
  i9186.m_DescentLine = i9187[11]
  i9186.m_SuperscriptOffset = i9187[12]
  i9186.m_SuperscriptSize = i9187[13]
  i9186.m_SubscriptOffset = i9187[14]
  i9186.m_SubscriptSize = i9187[15]
  i9186.m_UnderlineOffset = i9187[16]
  i9186.m_UnderlineThickness = i9187[17]
  i9186.m_StrikethroughOffset = i9187[18]
  i9186.m_StrikethroughThickness = i9187[19]
  i9186.m_TabWidth = i9187[20]
  return i9186
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i9190 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i9191 = data
  i9190.m_Index = i9191[0]
  i9190.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i9191[1], i9190.m_Metrics)
  i9190.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i9191[2], i9190.m_GlyphRect)
  i9190.m_Scale = i9191[3]
  i9190.m_AtlasIndex = i9191[4]
  i9190.m_ClassDefinitionType = i9191[5]
  return i9190
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i9192 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i9193 = data
  i9192.m_Width = i9193[0]
  i9192.m_Height = i9193[1]
  i9192.m_HorizontalBearingX = i9193[2]
  i9192.m_HorizontalBearingY = i9193[3]
  i9192.m_HorizontalAdvance = i9193[4]
  return i9192
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i9194 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i9195 = data
  i9194.m_X = i9195[0]
  i9194.m_Y = i9195[1]
  i9194.m_Width = i9195[2]
  i9194.m_Height = i9195[3]
  return i9194
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i9198 = root || request.c( 'TMPro.TMP_Character' )
  var i9199 = data
  i9198.m_ElementType = i9199[0]
  i9198.m_Unicode = i9199[1]
  i9198.m_GlyphIndex = i9199[2]
  i9198.m_Scale = i9199[3]
  return i9198
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i9204 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i9205 = data
  i9204.Name = i9205[0]
  i9204.PointSize = i9205[1]
  i9204.Scale = i9205[2]
  i9204.CharacterCount = i9205[3]
  i9204.LineHeight = i9205[4]
  i9204.Baseline = i9205[5]
  i9204.Ascender = i9205[6]
  i9204.CapHeight = i9205[7]
  i9204.Descender = i9205[8]
  i9204.CenterLine = i9205[9]
  i9204.SuperscriptOffset = i9205[10]
  i9204.SubscriptOffset = i9205[11]
  i9204.SubSize = i9205[12]
  i9204.Underline = i9205[13]
  i9204.UnderlineThickness = i9205[14]
  i9204.strikethrough = i9205[15]
  i9204.strikethroughThickness = i9205[16]
  i9204.TabWidth = i9205[17]
  i9204.Padding = i9205[18]
  i9204.AtlasWidth = i9205[19]
  i9204.AtlasHeight = i9205[20]
  return i9204
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i9208 = root || request.c( 'TMPro.TMP_Glyph' )
  var i9209 = data
  i9208.id = i9209[0]
  i9208.x = i9209[1]
  i9208.y = i9209[2]
  i9208.width = i9209[3]
  i9208.height = i9209[4]
  i9208.xOffset = i9209[5]
  i9208.yOffset = i9209[6]
  i9208.xAdvance = i9209[7]
  i9208.scale = i9209[8]
  return i9208
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i9210 = root || request.c( 'TMPro.KerningTable' )
  var i9211 = data
  var i9213 = i9211[0]
  var i9212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i9213.length; i += 1) {
    i9212.add(request.d('TMPro.KerningPair', i9213[i + 0]));
  }
  i9210.kerningPairs = i9212
  return i9210
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i9216 = root || request.c( 'TMPro.KerningPair' )
  var i9217 = data
  i9216.xOffset = i9217[0]
  i9216.m_FirstGlyph = i9217[1]
  i9216.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i9217[2], i9216.m_FirstGlyphAdjustments)
  i9216.m_SecondGlyph = i9217[3]
  i9216.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i9217[4], i9216.m_SecondGlyphAdjustments)
  i9216.m_IgnoreSpacingAdjustments = !!i9217[5]
  return i9216
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i9218 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i9219 = data
  var i9221 = i9219[0]
  var i9220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i9221.length; i += 1) {
    i9220.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i9221[i + 0]));
  }
  i9218.m_GlyphPairAdjustmentRecords = i9220
  return i9218
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i9224 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i9225 = data
  i9224.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i9225[0], i9224.m_FirstAdjustmentRecord)
  i9224.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i9225[1], i9224.m_SecondAdjustmentRecord)
  i9224.m_FeatureLookupFlags = i9225[2]
  return i9224
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i9228 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i9229 = data
  i9228.sourceFontFileName = i9229[0]
  i9228.sourceFontFileGUID = i9229[1]
  i9228.pointSizeSamplingMode = i9229[2]
  i9228.pointSize = i9229[3]
  i9228.padding = i9229[4]
  i9228.packingMode = i9229[5]
  i9228.atlasWidth = i9229[6]
  i9228.atlasHeight = i9229[7]
  i9228.characterSetSelectionMode = i9229[8]
  i9228.characterSequence = i9229[9]
  i9228.referencedFontAssetGUID = i9229[10]
  i9228.referencedTextAssetGUID = i9229[11]
  i9228.fontStyle = i9229[12]
  i9228.fontStyleModifier = i9229[13]
  i9228.renderMode = i9229[14]
  i9228.includeFontFeatures = !!i9229[15]
  return i9228
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i9232 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i9233 = data
  request.r(i9233[0], i9233[1], 0, i9232, 'regularTypeface')
  request.r(i9233[2], i9233[3], 0, i9232, 'italicTypeface')
  return i9232
}

Deserializers["ItemData"] = function (request, data, root) {
  var i9234 = root || request.c( 'ItemData' )
  var i9235 = data
  i9234.itemName = i9235[0]
  request.r(i9235[1], i9235[2], 0, i9234, 'itemIcon')
  i9234.ItemCount = i9235[3]
  request.r(i9235[4], i9235[5], 0, i9234, 'collectItemSprite')
  i9234.color = i9235[6]
  request.r(i9235[7], i9235[8], 0, i9234, 'DecorationSprite')
  return i9234
}

Deserializers["TileData"] = function (request, data, root) {
  var i9236 = root || request.c( 'TileData' )
  var i9237 = data
  i9236.tileName = i9237[0]
  request.r(i9237[1], i9237[2], 0, i9236, 'tileSprite')
  i9236.isPowerup = !!i9237[3]
  i9236.isBreakable = !!i9237[4]
  i9236.isSwappable = !!i9237[5]
  i9236.isSpecialBreakable = !!i9237[6]
  return i9236
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i9238 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i9239 = data
  var i9241 = i9239[0]
  var i9240 = []
  for(var i = 0; i < i9241.length; i += 2) {
  request.r(i9241[i + 0], i9241[i + 1], 2, i9240, '')
  }
  i9238.atlasAssets = i9240
  i9238.scale = i9239[1]
  request.r(i9239[2], i9239[3], 0, i9238, 'skeletonJSON')
  i9238.isUpgradingBlendModeMaterials = !!i9239[4]
  i9238.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i9239[5], i9238.blendModeMaterials)
  var i9243 = i9239[6]
  var i9242 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i9243.length; i += 2) {
  request.r(i9243[i + 0], i9243[i + 1], 1, i9242, '')
  }
  i9238.skeletonDataModifiers = i9242
  var i9245 = i9239[7]
  var i9244 = []
  for(var i = 0; i < i9245.length; i += 1) {
    i9244.push( i9245[i + 0] );
  }
  i9238.fromAnimation = i9244
  var i9247 = i9239[8]
  var i9246 = []
  for(var i = 0; i < i9247.length; i += 1) {
    i9246.push( i9247[i + 0] );
  }
  i9238.toAnimation = i9246
  i9238.duration = i9239[9]
  i9238.defaultMix = i9239[10]
  request.r(i9239[11], i9239[12], 0, i9238, 'controller')
  return i9238
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i9250 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i9251 = data
  i9250.applyAdditiveMaterial = !!i9251[0]
  var i9253 = i9251[1]
  var i9252 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i9253.length; i += 1) {
    i9252.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i9253[i + 0]));
  }
  i9250.additiveMaterials = i9252
  var i9255 = i9251[2]
  var i9254 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i9255.length; i += 1) {
    i9254.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i9255[i + 0]));
  }
  i9250.multiplyMaterials = i9254
  var i9257 = i9251[3]
  var i9256 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i9257.length; i += 1) {
    i9256.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i9257[i + 0]));
  }
  i9250.screenMaterials = i9256
  i9250.requiresBlendModeMaterials = !!i9251[4]
  return i9250
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i9260 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i9261 = data
  i9260.pageName = i9261[0]
  request.r(i9261[1], i9261[2], 0, i9260, 'material')
  return i9260
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i9264 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i9265 = data
  request.r(i9265[0], i9265[1], 0, i9264, 'atlasFile')
  var i9267 = i9265[2]
  var i9266 = []
  for(var i = 0; i < i9267.length; i += 2) {
  request.r(i9267[i + 0], i9267[i + 1], 2, i9266, '')
  }
  i9264.materials = i9266
  i9264.textureLoadingMode = i9265[3]
  request.r(i9265[4], i9265[5], 0, i9264, 'onDemandTextureLoader')
  return i9264
}

Deserializers["DynamitePowerup"] = function (request, data, root) {
  var i9268 = root || request.c( 'DynamitePowerup' )
  var i9269 = data
  i9268.explosionRadius = i9269[0]
  i9268.tileName = i9269[1]
  request.r(i9269[2], i9269[3], 0, i9268, 'tileSprite')
  i9268.isPowerup = !!i9269[4]
  i9268.isBreakable = !!i9269[5]
  i9268.isSwappable = !!i9269[6]
  i9268.isSpecialBreakable = !!i9269[7]
  return i9268
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i9270 = root || request.c( 'AudioLibrary' )
  var i9271 = data
  var i9273 = i9271[0]
  var i9272 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i9273.length; i += 1) {
    i9272.add(request.d('AudioLibrary+ClipEntry', i9273[i + 0]));
  }
  i9270.clips = i9272
  return i9270
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i9276 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i9277 = data
  i9276.key = i9277[0]
  i9276.channel = i9277[1]
  request.r(i9277[2], i9277[3], 0, i9276, 'clip')
  i9276.volume = i9277[4]
  i9276.loop = !!i9277[5]
  return i9276
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i9278 = root || request.c( 'TMPro.TMP_Settings' )
  var i9279 = data
  i9278.m_enableWordWrapping = !!i9279[0]
  i9278.m_enableKerning = !!i9279[1]
  i9278.m_enableExtraPadding = !!i9279[2]
  i9278.m_enableTintAllSprites = !!i9279[3]
  i9278.m_enableParseEscapeCharacters = !!i9279[4]
  i9278.m_EnableRaycastTarget = !!i9279[5]
  i9278.m_GetFontFeaturesAtRuntime = !!i9279[6]
  i9278.m_missingGlyphCharacter = i9279[7]
  i9278.m_warningsDisabled = !!i9279[8]
  request.r(i9279[9], i9279[10], 0, i9278, 'm_defaultFontAsset')
  i9278.m_defaultFontAssetPath = i9279[11]
  i9278.m_defaultFontSize = i9279[12]
  i9278.m_defaultAutoSizeMinRatio = i9279[13]
  i9278.m_defaultAutoSizeMaxRatio = i9279[14]
  i9278.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i9279[15], i9279[16] )
  i9278.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i9279[17], i9279[18] )
  i9278.m_autoSizeTextContainer = !!i9279[19]
  i9278.m_IsTextObjectScaleStatic = !!i9279[20]
  var i9281 = i9279[21]
  var i9280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i9281.length; i += 2) {
  request.r(i9281[i + 0], i9281[i + 1], 1, i9280, '')
  }
  i9278.m_fallbackFontAssets = i9280
  i9278.m_matchMaterialPreset = !!i9279[22]
  request.r(i9279[23], i9279[24], 0, i9278, 'm_defaultSpriteAsset')
  i9278.m_defaultSpriteAssetPath = i9279[25]
  i9278.m_enableEmojiSupport = !!i9279[26]
  i9278.m_MissingCharacterSpriteUnicode = i9279[27]
  i9278.m_defaultColorGradientPresetsPath = i9279[28]
  request.r(i9279[29], i9279[30], 0, i9278, 'm_defaultStyleSheet')
  i9278.m_StyleSheetsResourcePath = i9279[31]
  request.r(i9279[32], i9279[33], 0, i9278, 'm_leadingCharacters')
  request.r(i9279[34], i9279[35], 0, i9278, 'm_followingCharacters')
  i9278.m_UseModernHangulLineBreakingRules = !!i9279[36]
  return i9278
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i9282 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i9283 = data
  i9282.hashCode = i9283[0]
  request.r(i9283[1], i9283[2], 0, i9282, 'material')
  i9282.materialHashCode = i9283[3]
  request.r(i9283[4], i9283[5], 0, i9282, 'spriteSheet')
  var i9285 = i9283[6]
  var i9284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i9285.length; i += 1) {
    i9284.add(request.d('TMPro.TMP_Sprite', i9285[i + 0]));
  }
  i9282.spriteInfoList = i9284
  var i9287 = i9283[7]
  var i9286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i9287.length; i += 2) {
  request.r(i9287[i + 0], i9287[i + 1], 1, i9286, '')
  }
  i9282.fallbackSpriteAssets = i9286
  i9282.m_Version = i9283[8]
  i9282.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i9283[9], i9282.m_FaceInfo)
  var i9289 = i9283[10]
  var i9288 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i9289.length; i += 1) {
    i9288.add(request.d('TMPro.TMP_SpriteCharacter', i9289[i + 0]));
  }
  i9282.m_SpriteCharacterTable = i9288
  var i9291 = i9283[11]
  var i9290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i9291.length; i += 1) {
    i9290.add(request.d('TMPro.TMP_SpriteGlyph', i9291[i + 0]));
  }
  i9282.m_SpriteGlyphTable = i9290
  return i9282
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i9294 = root || request.c( 'TMPro.TMP_Sprite' )
  var i9295 = data
  i9294.name = i9295[0]
  i9294.hashCode = i9295[1]
  i9294.unicode = i9295[2]
  i9294.pivot = new pc.Vec2( i9295[3], i9295[4] )
  request.r(i9295[5], i9295[6], 0, i9294, 'sprite')
  i9294.id = i9295[7]
  i9294.x = i9295[8]
  i9294.y = i9295[9]
  i9294.width = i9295[10]
  i9294.height = i9295[11]
  i9294.xOffset = i9295[12]
  i9294.yOffset = i9295[13]
  i9294.xAdvance = i9295[14]
  i9294.scale = i9295[15]
  return i9294
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i9300 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i9301 = data
  i9300.m_Name = i9301[0]
  i9300.m_HashCode = i9301[1]
  i9300.m_ElementType = i9301[2]
  i9300.m_Unicode = i9301[3]
  i9300.m_GlyphIndex = i9301[4]
  i9300.m_Scale = i9301[5]
  return i9300
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i9304 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i9305 = data
  request.r(i9305[0], i9305[1], 0, i9304, 'sprite')
  i9304.m_Index = i9305[2]
  i9304.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i9305[3], i9304.m_Metrics)
  i9304.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i9305[4], i9304.m_GlyphRect)
  i9304.m_Scale = i9305[5]
  i9304.m_AtlasIndex = i9305[6]
  i9304.m_ClassDefinitionType = i9305[7]
  return i9304
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i9306 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i9307 = data
  var i9309 = i9307[0]
  var i9308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i9309.length; i += 1) {
    i9308.add(request.d('TMPro.TMP_Style', i9309[i + 0]));
  }
  i9306.m_StyleList = i9308
  return i9306
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i9312 = root || request.c( 'TMPro.TMP_Style' )
  var i9313 = data
  i9312.m_Name = i9313[0]
  i9312.m_HashCode = i9313[1]
  i9312.m_OpeningDefinition = i9313[2]
  i9312.m_ClosingDefinition = i9313[3]
  i9312.m_OpeningTagArray = i9313[4]
  i9312.m_ClosingTagArray = i9313[5]
  i9312.m_OpeningTagUnicodeArray = i9313[6]
  i9312.m_ClosingTagUnicodeArray = i9313[7]
  return i9312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i9314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i9315 = data
  var i9317 = i9315[0]
  var i9316 = []
  for(var i = 0; i < i9317.length; i += 1) {
    i9316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i9317[i + 0]) );
  }
  i9314.files = i9316
  i9314.componentToPrefabIds = i9315[1]
  return i9314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i9320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i9321 = data
  i9320.path = i9321[0]
  request.r(i9321[1], i9321[2], 0, i9320, 'unityObject')
  return i9320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i9322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i9323 = data
  var i9325 = i9323[0]
  var i9324 = []
  for(var i = 0; i < i9325.length; i += 1) {
    i9324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i9325[i + 0]) );
  }
  i9322.scriptsExecutionOrder = i9324
  var i9327 = i9323[1]
  var i9326 = []
  for(var i = 0; i < i9327.length; i += 1) {
    i9326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i9327[i + 0]) );
  }
  i9322.sortingLayers = i9326
  var i9329 = i9323[2]
  var i9328 = []
  for(var i = 0; i < i9329.length; i += 1) {
    i9328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i9329[i + 0]) );
  }
  i9322.cullingLayers = i9328
  i9322.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i9323[3], i9322.timeSettings)
  i9322.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i9323[4], i9322.physicsSettings)
  i9322.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i9323[5], i9322.physics2DSettings)
  i9322.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9323[6], i9322.qualitySettings)
  i9322.enableRealtimeShadows = !!i9323[7]
  i9322.enableAutoInstancing = !!i9323[8]
  i9322.enableDynamicBatching = !!i9323[9]
  i9322.lightmapEncodingQuality = i9323[10]
  i9322.desiredColorSpace = i9323[11]
  var i9331 = i9323[12]
  var i9330 = []
  for(var i = 0; i < i9331.length; i += 1) {
    i9330.push( i9331[i + 0] );
  }
  i9322.allTags = i9330
  return i9322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i9334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i9335 = data
  i9334.name = i9335[0]
  i9334.value = i9335[1]
  return i9334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i9338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i9339 = data
  i9338.id = i9339[0]
  i9338.name = i9339[1]
  i9338.value = i9339[2]
  return i9338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i9342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i9343 = data
  i9342.id = i9343[0]
  i9342.name = i9343[1]
  return i9342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i9344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i9345 = data
  i9344.fixedDeltaTime = i9345[0]
  i9344.maximumDeltaTime = i9345[1]
  i9344.timeScale = i9345[2]
  i9344.maximumParticleTimestep = i9345[3]
  return i9344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i9346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i9347 = data
  i9346.gravity = new pc.Vec3( i9347[0], i9347[1], i9347[2] )
  i9346.defaultSolverIterations = i9347[3]
  i9346.bounceThreshold = i9347[4]
  i9346.autoSyncTransforms = !!i9347[5]
  i9346.autoSimulation = !!i9347[6]
  var i9349 = i9347[7]
  var i9348 = []
  for(var i = 0; i < i9349.length; i += 1) {
    i9348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i9349[i + 0]) );
  }
  i9346.collisionMatrix = i9348
  return i9346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i9352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i9353 = data
  i9352.enabled = !!i9353[0]
  i9352.layerId = i9353[1]
  i9352.otherLayerId = i9353[2]
  return i9352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i9354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i9355 = data
  request.r(i9355[0], i9355[1], 0, i9354, 'material')
  i9354.gravity = new pc.Vec2( i9355[2], i9355[3] )
  i9354.positionIterations = i9355[4]
  i9354.velocityIterations = i9355[5]
  i9354.velocityThreshold = i9355[6]
  i9354.maxLinearCorrection = i9355[7]
  i9354.maxAngularCorrection = i9355[8]
  i9354.maxTranslationSpeed = i9355[9]
  i9354.maxRotationSpeed = i9355[10]
  i9354.baumgarteScale = i9355[11]
  i9354.baumgarteTOIScale = i9355[12]
  i9354.timeToSleep = i9355[13]
  i9354.linearSleepTolerance = i9355[14]
  i9354.angularSleepTolerance = i9355[15]
  i9354.defaultContactOffset = i9355[16]
  i9354.autoSimulation = !!i9355[17]
  i9354.queriesHitTriggers = !!i9355[18]
  i9354.queriesStartInColliders = !!i9355[19]
  i9354.callbacksOnDisable = !!i9355[20]
  i9354.reuseCollisionCallbacks = !!i9355[21]
  i9354.autoSyncTransforms = !!i9355[22]
  var i9357 = i9355[23]
  var i9356 = []
  for(var i = 0; i < i9357.length; i += 1) {
    i9356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i9357[i + 0]) );
  }
  i9354.collisionMatrix = i9356
  return i9354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i9360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i9361 = data
  i9360.enabled = !!i9361[0]
  i9360.layerId = i9361[1]
  i9360.otherLayerId = i9361[2]
  return i9360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i9362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i9363 = data
  var i9365 = i9363[0]
  var i9364 = []
  for(var i = 0; i < i9365.length; i += 1) {
    i9364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i9365[i + 0]) );
  }
  i9362.qualityLevels = i9364
  var i9367 = i9363[1]
  var i9366 = []
  for(var i = 0; i < i9367.length; i += 1) {
    i9366.push( i9367[i + 0] );
  }
  i9362.names = i9366
  i9362.shadows = i9363[2]
  i9362.anisotropicFiltering = i9363[3]
  i9362.antiAliasing = i9363[4]
  i9362.lodBias = i9363[5]
  i9362.shadowCascades = i9363[6]
  i9362.shadowDistance = i9363[7]
  i9362.shadowmaskMode = i9363[8]
  i9362.shadowProjection = i9363[9]
  i9362.shadowResolution = i9363[10]
  i9362.softParticles = !!i9363[11]
  i9362.softVegetation = !!i9363[12]
  i9362.activeColorSpace = i9363[13]
  i9362.desiredColorSpace = i9363[14]
  i9362.masterTextureLimit = i9363[15]
  i9362.maxQueuedFrames = i9363[16]
  i9362.particleRaycastBudget = i9363[17]
  i9362.pixelLightCount = i9363[18]
  i9362.realtimeReflectionProbes = !!i9363[19]
  i9362.shadowCascade2Split = i9363[20]
  i9362.shadowCascade4Split = new pc.Vec3( i9363[21], i9363[22], i9363[23] )
  i9362.streamingMipmapsActive = !!i9363[24]
  i9362.vSyncCount = i9363[25]
  i9362.asyncUploadBufferSize = i9363[26]
  i9362.asyncUploadTimeSlice = i9363[27]
  i9362.billboardsFaceCameraPosition = !!i9363[28]
  i9362.shadowNearPlaneOffset = i9363[29]
  i9362.streamingMipmapsMemoryBudget = i9363[30]
  i9362.maximumLODLevel = i9363[31]
  i9362.streamingMipmapsAddAllCameras = !!i9363[32]
  i9362.streamingMipmapsMaxLevelReduction = i9363[33]
  i9362.streamingMipmapsRenderersPerFrame = i9363[34]
  i9362.resolutionScalingFixedDPIFactor = i9363[35]
  i9362.streamingMipmapsMaxFileIORequests = i9363[36]
  i9362.currentQualityLevel = i9363[37]
  return i9362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i9372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i9373 = data
  i9372.weight = i9373[0]
  i9372.vertices = i9373[1]
  i9372.normals = i9373[2]
  i9372.tangents = i9373[3]
  return i9372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i9376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i9377 = data
  i9376.mode = i9377[0]
  i9376.parameter = i9377[1]
  i9376.threshold = i9377[2]
  return i9376
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i9378 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i9379 = data
  i9378.xPlacement = i9379[0]
  i9378.yPlacement = i9379[1]
  i9378.xAdvance = i9379[2]
  i9378.yAdvance = i9379[3]
  return i9378
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i9380 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i9381 = data
  i9380.m_GlyphIndex = i9381[0]
  i9380.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i9381[1], i9380.m_GlyphValueRecord)
  return i9380
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i9382 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i9383 = data
  i9382.m_XPlacement = i9383[0]
  i9382.m_YPlacement = i9383[1]
  i9382.m_XAdvance = i9383[2]
  i9382.m_YAdvance = i9383[3]
  return i9382
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[74],"75":[28],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[77],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[85],"93":[85],"94":[85],"95":[85],"96":[85],"97":[85],"98":[28],"99":[100],"101":[102],"103":[102],"30":[0],"20":[17],"104":[17],"105":[17],"106":[28],"107":[108],"109":[0],"110":[1,0],"111":[100],"44":[1,0],"112":[52,100],"113":[100],"114":[100,115],"116":[77],"117":[85],"118":[108],"119":[120],"121":[51],"122":[28],"123":[124],"125":[0],"126":[100,0],"5":[0,1],"127":[0],"128":[1,0],"129":[100],"130":[1,0],"131":[0],"132":[133],"134":[133],"135":[133],"136":[0],"137":[0],"32":[30],"4":[1,0],"138":[0],"31":[30],"139":[0],"47":[0],"45":[0],"140":[0],"141":[0],"142":[0],"143":[0],"48":[0],"144":[0],"145":[1,0],"146":[0],"147":[0],"148":[0],"149":[0],"150":[1,0],"151":[0],"152":[55],"153":[55],"56":[55],"154":[55],"155":[28],"156":[28]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.MonoBehaviour","Item","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.Sprite","ItemData","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","TileCell","TileData","Tile","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","CartoonFX.CFXR_Effect","UnityEngine.Light","AnimatedTile","UnityEngine.GameObject","UnityEngine.TrailRenderer","StateEvents","PositionTracking","PNGSequencer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BasicFade","UnityEngine.CanvasGroup","UnityEngine.UI.Button","AppearAnimation","PlayerGuide","GameManager","RectAnimator","TileManager","DynamitePowerup","DynamiteEffect","SpecialTileManager","Spine.Unity.SkeletonGraphic","UnityEngine.UI.HorizontalLayoutGroup","UIMoveTo","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.Mask","Spine.Unity.SkeletonDataAsset","AnimatedTileSpawner","UnityEngine.SpriteRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MergeHands","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","AudioManager","AudioLibrary","UnityEngine.Font","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioClip","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CartoonFX.CFXR_EmissionBySurface","CartoonFX.CFXR_ParticleText","Kino.Bloom","Spine.Unity.EditorSkeletonPlayer","Spine.Unity.ISkeletonAnimation","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","UnityEngine.MeshFilter","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2023.1.0f1";

Deserializers.productName = "Piggy Kingdom - Renovation";

Deserializers.lunaInitializationTime = "09/29/2025 07:36:59";

Deserializers.lunaDaysRunning = "9.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "Farm-Renovation-ChangedBackground";

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

Deserializers.buildID = "cb1b32c1-f3bd-4945-b6bc-f2b16357db6f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

